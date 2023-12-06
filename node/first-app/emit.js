let EventEmitter = require('events');
let emitter = new EventEmitter();

// Register a listner 
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Raise an event
// Add event arguement 
emitter.emit('messageLogged', {id: 1, url: 'http://'}); 