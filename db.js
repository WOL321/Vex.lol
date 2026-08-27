const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'db.json');
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

function readRaw() {
  if (!fs.existsSync(DB_PATH)) {
    return { users: [], profilesByUserId: {} };
  }
  const raw = fs.readFileSync(DB_PATH, 'utf8');
  if (!raw.trim()) return { users: [], profilesByUserId: {} };
  return JSON.parse(raw);
}

let state = readRaw();

// Async mutex
let locked = false;
const queue = [];

function acquire() {
  return new Promise(resolve => {
    if (!locked) {
      locked = true;
      resolve();
    } else {
      queue.push(resolve);
    }
  });
}

function release() {
  if (queue.length > 0) {
    const next = queue.shift();
    next();
  } else {
    locked = false;
  }
}

async function withLock(fn) {
  await acquire();
  try {
    return await fn();
  } finally {
    release();
  }
}

function persist() {
  return fs.promises.writeFile(DB_PATH, JSON.stringify(state, null, 2), 'utf8');
}

const db = {
  findUserByHandle(handle) {
    return state.users.find(u => u.handle.toLowerCase() === String(handle).toLowerCase()) || null;
  },
  findUserByEmail(email) {
    return state.users.find(u => u.email.toLowerCase() === String(email).toLowerCase()) || null;
  },
  findUserById(id) {
    return state.users.find(u => u.id === id) || null;
  },

  createUser({ id, handle, email, passwordHash, createdAt }) {
    return withLock(async () => {
      const user = { id, handle, email, passwordHash, createdAt };
      state.users.push(user);
      await persist();
      return user;
    });
  },

  getProfile(userId) {
    return state.profilesByUserId[userId] || null;
  },

  setProfile(userId, config) {
    return withLock(async () => {
      const existing = state.profilesByUserId[userId];
      state.profilesByUserId[userId] = {
        config,
        views: existing ? existing.views : 0,
        updatedAt: new Date().toISOString()
      };
      await persist();
      return state.profilesByUserId[userId];
    });
  },

  incrementViews(userId) {
    return withLock(async () => {
      const p = state.profilesByUserId[userId];
      if (!p) return 0;
      p.views = (p.views || 0) + 1;
      await persist();
      return p.views;
    });
  }
};

module.exports = db;
