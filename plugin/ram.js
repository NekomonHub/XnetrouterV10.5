const os = require('os');
const chalk = require('chalk');

function formatRam() {
  const free = (os.freemem() / 1024 / 1024).toFixed(0);
  const total = (os.totalmem() / 1024 / 1024).toFixed(0);
  return chalk.magenta.bold(`RAM: ${free}MB / ${total}MB free`);
}

function watchRam(interval = 1000) {
  setInterval(() => {
    process.stdout.write('\r' + formatRam() + '   '); 
    
  }, interval);
}

module.exports = { watchRam };
