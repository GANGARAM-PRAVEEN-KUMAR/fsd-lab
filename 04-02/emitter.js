const events = require('events');


const eventEmitter = new events.EventEmitter();


eventEmitter.on('userDetails', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});


function emitUserDetails(name, age) {
    eventEmitter.emit('userDetails', name, age);
}


emitUserDetails('Alice', 30);
emitUserDetails('Bob', 25);