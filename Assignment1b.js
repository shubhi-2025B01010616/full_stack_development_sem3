const EventEmitter = require('events');

const application = new EventEmitter();

application.on('input', (text) => {
    console.log("Entered text: " + text);
});

application.on('buttonClick', () => {
    console.log("Button clicked.");
});

application.on('formSubmit', () => {
    console.log("Form submitted successfully.");
});

application.on('logout', (name) => {
    console.log(name + " logged out.");
});

application.emit('input', 'Hello Node.js');
application.emit('buttonClick');
application.emit('formSubmit');
application.emit('logout', 'Rahul');