const EventEmitter = require('events');

const tracker = new EventEmitter();

tracker.on('login', (name) => {
    console.log(name + " logged in successfully.");
});

tracker.on('courseRegistration', (course) => {
    console.log("Course registered: " + course);
});

tracker.on('notification', (message) => {
    console.log("Notification: " + message);
});

tracker.on('logout', (name) => {
    console.log(name + " logged out successfully.");
});

tracker.emit('login', 'Shubhi');

tracker.emit('courseRegistration', 'Full Stack Development');

tracker.emit('notification', 'Your course registration is confirmed.');

tracker.emit('logout', 'Shubhi');