const EventEmitter = require('events');

const event = new EventEmitter();

event.on('nextTick', () => {
    console.log("process.nextTick() executed");
});

event.on('timeout', () => {
    console.log("setTimeout() executed");
});

event.on('immediate', () => {
    console.log("setImmediate() executed");
});

console.log("1. Synchronous code before callbacks");

process.nextTick(() => {
    event.emit('nextTick');
});

setTimeout(() => {
    event.emit('timeout');
}, 0);

setImmediate(() => {
    event.emit('immediate');
});

console.log("2. Synchronous code after callbacks");