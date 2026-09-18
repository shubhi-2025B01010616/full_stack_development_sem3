const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('studentJoined', (name) => {
    console.log(`Student ${name} joined the session.`);
});

myEmitter.on('courseSelected', (course) => {
    console.log(`Course selected: ${course}`);
});

myEmitter.on('sessionEnded', (code) => {
    console.log(`Session ended. Code: ${code}`);
});

myEmitter.emit('studentJoined', 'Rahul');
myEmitter.emit('courseSelected', 'Full Stack Development');
myEmitter.emit('sessionEnded', 0);