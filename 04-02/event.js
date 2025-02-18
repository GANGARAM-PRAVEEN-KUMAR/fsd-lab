const events=require('events')

let myemitter=new events.EventEmitter()
myemitter.on("some Event",()=>{
    console.log("some event triggered")
})

myemitter.emit("some Event")