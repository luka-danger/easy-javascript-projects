// main module 
// Use require to load the function 
// Store value in constant so we don't accidentally override
const logger = require('./logger');

logger()

const path = require('node:path');

let pathObject = path.parse(__filename);
console.log(pathObject)