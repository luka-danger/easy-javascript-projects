// main module
let logger = require('./logger'); 

logger()

// HTTP Module
const http = require('http');

// Create Web Server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
// Raise event every time new request with port 3000
server.on('connection', (socket) => {
    console.log('New connection...;');
}); 
// Server Port
server.listen(3000)

console.group('Listening on port 3000...')