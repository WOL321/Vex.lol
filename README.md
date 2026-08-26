# Profile Platform

A real, multi-user bio-link platform: accounts, a database, image uploads, and live public
profile pages at `/u/yourhandle` — the backend behind the builder you were using before.

This is not a demo. It's tested end-to-end (registration, login, profile editing, image
uploads, real view counting, 404s for unclaimed handles) and ready to deploy.

## What's actually in here

- **Accounts** — email + password, bcrypt-hashed, JWT session cookies.
- **A database** — a small dependency-free JSON file store (`lib/db.js`). No native
  compilation, no external service required. Good for hundreds to low-thousands of users;
  see "When you outgrow this" below for what to do beyond that.
- **Live public pages** — `GET /u/:handle` renders your profile server-side, in real time,
  from whatever's saved in the database. No download step. Real, accumulating view counts.
- **A dashboard** (`/dashboard`) — the same builder UI as before, now saving to the real
  backend instead of an artifact's local storage, with actual image uploads.
- **Everything from the builder** — 11 background styles, real audio player, 12 badges,
  Discord widget, countdown, 26 social platforms, 6 font pairings, 5 layouts, SEO fields.

## Project structure

```
server.js              — Express app: auth, profile API, uploads, page rendering
lib/db.js               — JSON-file database (users + profiles)
lib/render.js            — server-side HTML renderer for /u/:handle
lib/defaultConfig.js      — default profile shape + platform list
public/landing.html        — homepage
public/login.html           — login form
public/register.html         — signup form (with live handle availability check)
public/dashboard.html         — the builder, wired to the real API
public/render-client.js        — browser copy of the renderer, used for the live preview
data/db.json (generated)        — your database file
uploads/ (generated)             — uploaded avatar/banner images
```

## Run it locally

```bash
npm install
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))") npm start
```

Then open `http://localhost:3000`, register an account, and go to `/dashboard`.
Your public page is live immediately at `http://localhost:3000/u/yourhandle`.

## Deploy it for real

You need a host that keeps a Node process running and — important — gives you **persistent
disk**, because the database and uploaded images are stored as files. Two good free-tier
options:

### Railway (recommended — has persistent volumes on the free tier)
1. Push this folder to a GitHub repo.
2. On [railway.app](https://railway.app), "New Project" → "Deploy from GitHub repo".
3. Add a volume mounted at `/data` and `/uploads` (Railway's dashboard → your service →
   Volumes), or simplest: mount one volume at the project root so `data/` and `uploads/`
   persist across deploys.
4. In Variables, set `JWT_SECRET` to a long random string (see command above).
5. Railway auto-detects `npm start`. Deploy. Your app gets a public `*.up.railway.app` URL.

### Render
1. Push to GitHub, then "New Web Service" on [render.com](https://render.com), connect the repo.
2. Build command: `npm install`. Start command: `npm start`.
3. Add environment variable `JWT_SECRET`.
4. **Add a persistent disk** (Render dashboard → your service → Disks) mounted at, e.g.,
   `/opt/render/project/src/data` and another at `.../uploads` — Render's free tier disk is
   persistent but the *filesystem itself* resets on redeploy unless you use a disk, so this
   step matters.

### Custom domain
Once deployed, add your domain in the host's dashboard and point your DNS at it — same as
any other web app. Then update the "live link" shown in the dashboard by editing the
`origin` shown there (it's derived automatically from whatever URL the app is served on,
so no code change needed — it just works once your domain resolves to the app).

## Security notes (already handled, worth knowing about)

- Passwords are hashed with bcrypt, never stored in plaintext.
- Sessions are httpOnly JWT cookies (not readable by page JavaScript).
- All user-supplied text is HTML-escaped before being rendered into public pages — tested
  against script-injection attempts in the bio, display name, and social URLs.
- Logout clears the browser's cookie. Note this is stateless-JWT logout: the token itself
  remains technically valid until it expires (30 days) if someone captured it separately —
  standard behavior for this auth style. If you need instant server-side session revocation
  later, that's a small addition (a token-denylist table).

## When you outgrow the JSON file database

The JSON-file store is genuinely fine at small-to-medium scale, but it rewrites the whole
file on every save, which stops being ideal somewhere in the thousands-of-users range. When
you get there, swap `lib/db.js` for a real database — Postgres (Supabase/Neon both have free
tiers) is the natural next step — while keeping the exact same function signatures
(`findUserByHandle`, `createUser`, `setProfile`, etc.) so nothing else in the app has to
change.

## What's still not included

- **Password reset / email verification** — currently there's no email-sending step, so
  forgotten passwords have no self-serve recovery. Add a transactional email provider
  (Resend, Postmark) when you need this.
- **Real Discord Rich Presence** — the Discord widget is editable by you, not pulled live
  from Discord's API. Live status requires a Discord bot + OAuth, a separate integration.
- **Rate limiting / abuse protection** — fine for personal use; add `express-rate-limit`
  before opening this up publicly at scale.
