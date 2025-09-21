const fs = require('fs');
const path = require('path');

function auto(folderPath) {
  const absPath = path.resolve(process.cwd(), folderPath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`[allrun] folder tidak ada: ${absPath}`);
  }
  const files = fs.readdirSync(absPath)
    .filter(f => f.endsWith('.js'));
  files.forEach(file => {
    const full = path.join(absPath, file);
    require(full);
  });
}

module.exports = auto;
