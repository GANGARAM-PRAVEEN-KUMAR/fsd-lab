function add(a,b){
    return a+b
}

function sub(a,b){
    if(a>b){
        return a-b
    }else{
        return b-a
    }
}

function calc(a,b,callback){
    return callback(a,b)
}

let a=calc(10,20,add)
console.log(a)
let s=calc(10,20,sub)
console.log(s)
let s1=calc(30,10,sub)
console.log(s1)