const os = require('node:os');

let totalMemory = os.totalmem()
let freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// main module 
// Use require to load the function 
// Store value in constant so we don't accidentally override
const logger = require('./logger');

logger()
// Show file path
const path = require('node:path');

let pathObject = path.parse(__filename);
console.log(pathObject)