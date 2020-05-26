const os = require('os')

let totalMemory = os.totalmem()
let freeMemory = os.freemem()

// template String // ES6 // use bactick so dont neeed contatination use +
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
// Return = 
// Total Memory: 8002883584
// Free Memory: 3531821056

