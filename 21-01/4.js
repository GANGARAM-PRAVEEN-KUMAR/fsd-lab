function greet(name,callback){
    return callback(name)
}

function msg(name){
    return "welcome "+name
}

console.log(greet("praveen",msg))
