const os = require("os");
const chalk = require("chalk");

function formatUptime() {
  let uptime = os.uptime();
  let hours = Math.floor(uptime / 3600);
  let minutes = Math.floor((uptime % 3600) / 60);
  let seconds = Math.floor(uptime % 60);

  return chalk.magenta.bold(
    `Uptime: ${hours}h ${minutes}m ${seconds}s`
  );
}

function watchUptime(interval = 1000) {
  setInterval(() => {
    process.stdout.write("\r" + formatUptime() + "   ");
  }, interval);
}

module.exports = { watchUptime };
