const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'db.json');
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
let writeChain = Promise.resolve();

function persist() {
  // Chain writes so concurrent requests never interleave and corrupt the file.
  writeChain = writeChain.then(() => {
    return fs.promises.writeFile(DB_PATH, JSON.stringify(state, null, 2), 'utf8');
  });
  return writeChain;
}

const db = {
  // ---- users ----
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
    const user = { id, handle, email, passwordHash, createdAt };
    state.users.push(user);
    return persist().then(() => user);
  },

  // ---- profiles ----
  getProfile(userId) {
    return state.profilesByUserId[userId] || null;
  },
  setProfile(userId, config) {
    const existing = state.profilesByUserId[userId];
    state.profilesByUserId[userId] = {
      config,
      views: existing ? existing.views : 0,
      updatedAt: new Date().toISOString()
    };
    return persist().then(() => state.profilesByUserId[userId]);
  },
  incrementViews(userId) {
    const p = state.profilesByUserId[userId];
    if (!p) return Promise.resolve(0);
    p.views = (p.views || 0) + 1;
    return persist().then(() => p.views);
  }
};

module.exports = db;
