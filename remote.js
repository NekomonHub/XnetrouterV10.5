const banner = require('./plugin/figlet.js');
const {
    spawn
} = require('child_process');
require('./settings.js');
const {
	watchRam 
} = require('./plugin/ram.js');
const {
	watchUptime
} = require('./plugin/uptime.js')

const dongo = watchRam(1000);

function all(){
const teks = `
.....'''',:O0. ..................,,........kl:,,,,'''
..''''',;lkNo...''',.',,..'.... .,''. ......xdc;,,,,,
'''',,,coOWx:',,,,;'';,,..... .........   ...oxc:;;;,
',,,,:lcOW0l::;;;;:',;,''... ... ...,;;'.. ...Oxlc;;;
,,,;:::xKx:;,,',;;;''',,.,'.  .. .  .'','.   .;kol:::
;;;;::okk.........'............    . ' . . ....:ccl::
;;:::cxxl... .....................   .       ..  .,:c
::ccclkol.    .......'l;...........              ....
cccclxdl...  ........:lc;..  ......    ..      .. ...
cclldoxl.:..    .....c'.  ..........       .  .'o:.,;
llllodd:,d:.. .......:dd::ol;.....  ..     .....okxlc
looooollod,.   ,:cc;,,lddddc......       . .....:dkxd
ooooddldkl'....':codddddddlc:'....  .. ... ......:dxk
ddddddxkl'.....';ccloooooooo:.....  '. .... ......'co
xxxxkOd:'.....';xxdcclllllc'.....  .'   .... ..''..';
xxkkd;','.'',;,ckxlcxdlll.   .......'   ....  ..';.co
cc:,'co;..',ox:cdllxOl   ......  ..'. .. ..... ..'::;
kxl:kx:.',;okxcxc'''','... ..     ... ..... ... ...'l
ccoOo,.';cokkddd,.....,:;,'.     ...    ...      . .'
xkl,.';okdkkxd.   .,;,'............      ... ..    .'
:.',;cxkkxOdo:''.   ......  ..  ...      ........
:oxclkkOxc,......,,.         ..'.        .... .......
OOcododc..    ......'.       .....       .... .....',
,,''...;,....   ...  ...    ..    .....  .......,''..
.''.    .'..           ... ..         ....'..........
 .....    ...            .'.             .... . ....
   ...'.   .,.           .'.'.      .    .... .  ...
      
        ██╗  ██╗ ███╗   ██╗ ███████╗ ████████╗
        ╚██╗██╔╝ ████╗  ██║ ██╔════╝ ╚══██╔══╝
         ╚███╔╝  ██╔██╗ ██║ █████╗      ██║
         ██╔██╗  ██║╚██╗██║ ██╔══╝      ██║
        ██╔╝ ██╗ ██║ ╚████║ ███████╗    ██║
        ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚══════╝    ╚═╝
                 Xnet - Router [V10]
                     By ZennDev
                       © 2025
                       ${dongo}
`
console.log(`\x1b[1;35m${teks}\x1b[0m`);

const auto = require('./plugin/auto.js');
const chalk = require('chalk');

function run(filepath){
	spawn('node', [filepath],{
		stdio: "inherit"
	});
} function clear(){
	spawn('clear', {
		stdio: 'inherit'
	});
}
	
function centerLog(text) {
  const indent = '                  ';
  console.log(indent + text);
}

if (global.icmp) {
  run('./broadcast_ping/icmp.js');
} else {
  centerLog(chalk.bold.red('udphulk turned off'));
}

if (global.udp) {
  run('./broadcast_udp/udp.js');
} else {
  centerLog(chalk.red.bold('udphulk turned off'));
}




auto('./combo_ping');
centerLog(chalk.green.bold('Combo ping Connected...'));

if (global.udphulk){
	auto('./udphulk');
	centerLog(chalk.green.bold('Combo Udp Connected...'));
} else {
	centerLog(chalk.red.bold('udphulk turned off'));
}
}

const clear = spawn('clear', { stdio: 'inherit'});

clear.on('close', () => {
	all();
});
