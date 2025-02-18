// Question 3: Write a function delayedMessage(message, delay) that prints the
//             message after the specified delay using setTimeout. Use a callback for when
//             the message has been printed.



function registerstudent(callback){
    setTimeout(()=>{
        console.log("register successful")
        callback()
    },3000)
}

function issueid(callback){
    setTimeout(()=>{
        console.log("id issued")
        callback()
    },500)
}


function attendclasses(callback){
    setTimeout(()=>{
        console.log("attending classes")
        callback()
    },3000)
}


function graduation(){
    setTimeout(()=>{
        console.log("student graduated")
    },500)
}

registerstudent(( )=>{
    issueid(()=>{
        attendclasses(()=>{
            graduation()
        })
    })
})
