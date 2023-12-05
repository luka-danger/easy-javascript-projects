const os = require('node:os');

let totalMemory = os.totalmem()
let freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)