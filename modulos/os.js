const os = require("os");

//console.log(os.arch());
//console.log(os.platform());
//console.log(os.cpus().length);
//console.log(os.constants);

const SIZE = 1024;
function kb(bytes) {
    return bytes / SIZE
}

function mb(bytes) {
    return kb(bytes) / SIZE
}

function gb(bytes) {
    return mb(bytes) / SIZE
}

// console.log(os.freemem());

// console.log(kb(os.freemem()));

// console.log(mb(os.freemem()));

// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem()));

// Directory for the user root
// console.log('Directory for the user root')
// console.log(os.homedir())
// console.log('')

// // Directory for temporal files
// console.log('Directory for temporal files')
// console.log(os.tmpdir())
// console.log('')

// Hostname of a server
console.log('Hostname of any server')
 console.log(os.hostname())
console.log('')

// // Actived Network interfaces right now
// console.log('Network Interfaces right now')
// console.log(os.networkInterfaces())
