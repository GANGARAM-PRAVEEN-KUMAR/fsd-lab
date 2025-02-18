// Question 2: Create three functions that take a number, multiply it by 2,
//             subtract 3, and then add 10. Use callbacks to chain these operations together.


function add(num,callback){
    return callback(num+10,false)
}
function sub(num,callback){
    return callback(num-3,false)
}
function mul(num,callback){
    return callback(num*2,false)
}

mul(10,(mulRes,err)=>{
    if(!err){
        sub(mulRes,(subRes,err)=>{
            if(!err){
                add(subRes ,(addRes,err)=>{
                    if(!err){
                        console.log("result",addRes)
                    }else{
                        console.log("error in multiply")
                    }
                })
            }else{
                console.log("error in subtraction")
            }
        })
    }else{
        console.log("error in add")
    }
})