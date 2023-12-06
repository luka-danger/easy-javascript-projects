let EventEmitter = require('events');
let emitter = new EventEmitter();

// Register a listner 
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Raise an event
// Add event arguement 
emitter.emit('messageLogged', {id: 1, url: 'http://'}); 

// Exercise: Raise an event called logging  (data: message)
let logging = new EventEmitter(); 
logging.on('logging', (arg) => {
    console.log('Logging...', arg)
});

logging.emit('logging', {data: 'wow, you did it'})