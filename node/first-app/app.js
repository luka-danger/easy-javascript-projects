// Load HTTP Module
const http = require('http');

// Create Web Server
const server = http.createServer();
// Raise event every time new request with port 3000
server.on('connection', (socket) => {
    console.log('New connection...;');
}); 
// Server Port
server.listen(3000)

console.group('Listening on port 3000...')