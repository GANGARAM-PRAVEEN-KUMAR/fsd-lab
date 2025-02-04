const fs=require('fs')

fs.writeFile("./test.txt","this is test file using write file method",(err)=>{
    if(err){
        console.log("error in writing the  test file")
    }
})

const data=fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error in reading the test file")
    }
    else{
        console.log(data)
        fs.writeFile("./abc.txt",data,(err)=>{
            if(err){
                console.log("error found at abc file in writing")
            } 
        })
    }
})