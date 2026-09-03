const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const db = require('./db');
const { buildPublicHTML } = require('./render');
const { DEFAULT_CFG } = require('./defaultConfig');

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

const RESERVED_HANDLES = new Set([
  'api', 'login', 'register', 'logout', 'dashboard', 'uploads', 'u',
  'admin', 'www', 'assets', 'static', 'favicon.ico', 'me', 'settings'
]);

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());
app.use('/uploads', express.static(uploadsDir));

// ---------- helpers ----------
function deepMerge(base, extra) {
  const out = JSON.parse(JSON.stringify(base));
  if (!extra) return out;
  for (const k in extra) {
    if (
      extra[k] &&
      typeof extra[k] === 'object' &&
      !Array.isArray(extra[k]) &&
      out[k] &&
      typeof out[k] === 'object' &&
      !Array.isArray(out[k])
    ) {
      out[k] = deepMerge(out[k], extra[k]);
    } else {
      out[k] = extra[k];
    }
  }
  return out;
}

function signToken(user) {
  return jwt.sign({ id: user.id, handle: user.handle }, JWT_SECRET, { expiresIn: '30d' });
}

function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) return next();
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = db.findUserById(payload.id);
    if (user) {
      req.user = { id: user.id, handle: user.handle, email: user.email };
    }
  } catch (e) {}
  next();
}

function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
  next();
}

function isValidHandle(handle) {
  return (
    typeof handle === 'string' &&
    /^[a-z0-9_-]{3,20}$/i.test(handle) &&
    !RESERVED_HANDLES.has(handle.toLowerCase())
  );
}

function setAuthCookie(res, token) {
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 30 * 24 * 3600 * 1000,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production' || true
  });
}

app.use(authMiddleware);

// ---------- auth ----------
app.post('/api/auth/register', async (req, res) => {
  try {
    const { handle, email, password } = req.body || {};
    if (!isValidHandle(handle)) {
      return res.status(400).json({ error: 'Handle must be 3-20 characters: letters, numbers, - or _' });
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email required' });
    }
    if (!password || password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }
    if (db.findUserByHandle(handle)) {
      return res.status(409).json({ error: 'Handle already taken' });
    }
    if (db.findUserByEmail(email)) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const id = crypto.randomUUID();
    const user = await db.createUser({
      id,
      handle: handle.toLowerCase(),
      email: email.toLowerCase(),
      passwordHash,
      createdAt: new Date().toISOString()
    });

    const cfg = JSON.parse(JSON.stringify(DEFAULT_CFG));
    cfg.identity.handle = user.handle;
    cfg.identity.display = handle;
    cfg.identity.avatarText = handle.slice(0, 1).toUpperCase();
    cfg.identity.joined = 'est. ' + new Date().getFullYear();
    cfg.effects.entranceTitle = handle;
    await db.setProfile(user.id, cfg);

    const token = signToken(user);
    setAuthCookie(res, token);
    res.json({ ok: true, handle: user.handle });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { identifier, password } = req.body || {};
    if (!identifier || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }

    const user =
      db.findUserByHandle(identifier) ||
      db.findUserByEmail(identifier);

    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken(user);
    setAuthCookie(res, token);
    res.json({ ok: true, handle: user.handle });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token', { sameSite: 'lax', secure: true });
  res.json({ ok: true });
});

app.get('/api/me', requireAuth, (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
});

app.get('/api/handle-available/:handle', (req, res) => {
  const h = req.params.handle;
  if (!isValidHandle(h)) {
    return res.json({ available: false, reason: 'invalid' });
  }
  res.json({ available: !db.findUserByHandle(h) });
});

// ---------- profile ----------
app.get('/api/profile', requireAuth, (req, res) => {
  const p = db.getProfile(req.user.id);
  const cfg = p ? deepMerge(DEFAULT_CFG, p.config || {}) : DEFAULT_CFG;
  res.json({
    config: cfg,
    views: p ? p.views : 0,
    clicks: p && p.clicks ? p.clicks : {},
    handle: req.user.handle
  });
});

// Public click tracking for social links
app.post('/api/click/:handle', async (req, res) => {
  try {
    const user = db.findUserByHandle(req.params.handle);
    if (!user) return res.status(404).json({ error: 'not found' });
    const platform = (req.body && req.body.platform) || 'link';
    const n = await db.incrementClick(user.id, platform);
    res.json({ ok: true, count: n });
  } catch (e) {
    res.status(500).json({ error: 'failed' });
  }
});

app.put('/api/profile', requireAuth, async (req, res) => {
  try {
    const incoming = req.body || {};
    const merged = deepMerge(DEFAULT_CFG, incoming);

    // Force account-controlled fields
    merged.identity.handle = req.user.handle;
    merged.socials = Array.isArray(incoming.socials)
      ? incoming.socials.filter(s => s && s.url)
      : [];
    merged.audio.tracks = Array.isArray(incoming.audio?.tracks)
      ? incoming.audio.tracks
      : [];
    merged.identity.taglines = Array.isArray(incoming.identity?.taglines)
      ? incoming.identity.taglines
      : [];
    merged.widgets.badges = Array.isArray(incoming.widgets?.badges)
      ? incoming.widgets.badges
      : [];

    await db.setProfile(req.user.id, merged);
    res.json({ ok: true });
  } catch (err) {
    console.error('Profile save error:', err);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

app.post('/api/upload', requireAuth, (req, res) => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: uploadsDir,
      filename: (r, file, cb) => {
        const ext = path.extname(file.originalname).slice(0, 10).replace(/[^a-zA-Z0-9.]/g, '');
        cb(null, `${req.user.id}-${Date.now()}${ext}`);
      }
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (r, file, cb) => {
      if (/^image\//.test(file.mimetype)) cb(null, true);
      else cb(new Error('Only image uploads are allowed'));
    }
  }).single('file');

  upload(req, res, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No file received' });
    res.json({ url: `/uploads/${req.file.filename}` });
  });
});

// ---------- public profile ----------
app.get('/u/:handle', async (req, res) => {
  try {
    const user = db.findUserByHandle(req.params.handle);
    if (!user) {
      return res.status(404).send(`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>not found</title>
<style>
body{background:#0a0a10;color:#eceef5;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center}
a{color:#8b7cf6}
</style></head>
<body>
<div>
  <h1 style="font-weight:600">nobody here</h1>
  <p style="color:#8a8ea3">@${req.params.handle} hasn't claimed this profile.</p>
  <p><a href="/register">Claim it →</a></p>
</div>
</body>
</html>`);
    }

    const profile = db.getProfile(user.id);
    const cfg = profile ? profile.config : DEFAULT_CFG;
    const views = await db.incrementViews(user.id);

    res.set('Content-Type', 'text/html');
    res.send(buildPublicHTML(cfg, { views }));
  } catch (err) {
    console.error('Profile render error:', err);
    res.status(500).send('Error loading profile');
  }
});

// ---------- pages ----------
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'landing.html'));
});

// Static files last
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Vex running on port ${PORT}`);
});
