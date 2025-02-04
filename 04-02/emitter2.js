const events = require('events');


const eventEmitter = new events.EventEmitter();


eventEmitter.once("greet",(name)=>{
    console.log(`Hello, ${name}! This is your first greeting.`);
})

function emitGreet(name){
    eventEmitter.emit('greet', name);
}

emitGreet('Alice'); 
emitGreet('Bob');   