const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const CACHE_DIR = path.join(__dirname, '..', 'cache');
const CACHE_FILE = path.join(CACHE_DIR, 'cache.json');

function safeParse(str, fallback) {
  try { return JSON.parse(str); } catch { return fallback; }
}

function ensureCacheFile() {
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
  if (!fs.existsSync(CACHE_FILE)) fs.writeFileSync(CACHE_FILE, JSON.stringify([], null, 2), 'utf8');
}

function getCallerFile() {
  const orig = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, frames) => frames;
  const err = new Error();
  const frames = err.stack;
  Error.prepareStackTrace = orig;
  const caller = frames[2];
  if (!caller) return 'unknown';
  return path.relative(process.cwd(), caller.getFileName() || 'unknown');
}

function readCache() {
  try { return safeParse(fs.readFileSync(CACHE_FILE, 'utf8'), []); }
  catch { return []; }
}

function writeCache(obj) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(obj, null, 2), 'utf8');
}

function trash(name) {
  ensureCacheFile();
  const resolved = (name && name.trim()) || getCallerFile();
  const now = new Date().toISOString();
  const cache = readCache();
  const idx = cache.findIndex(e => e.name === resolved);
  if (idx === -1) {
    cache.push({ name: resolved, firstSeen: now, lastSeen: now, count: 1 });
    console.log(chalk.grey.bold(`[memory] new: ${resolved}`));
  } else {
    cache[idx].lastSeen = now;
    cache[idx].count = (cache[idx].count || 0) + 1;
    console.log(chalk.grey.bold(`[memory] update: ${resolved} (count=${cache[idx].count})`));
  }

  writeCache(cache);
}

module.exports = trash;
