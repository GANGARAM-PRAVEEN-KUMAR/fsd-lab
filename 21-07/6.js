// Question 4: Write a function fetchDataWithCallback that simulates fetching
//             data from an API with a delay. Implement error handling in the callback,
//             where the callback can receive either a successful response or an error
//             message. Test the function by simulating both success and failure scenarios.

function fetch(callback){
    let n=Math.random()
    console.log(n)
    if(n>0.5){
        let user={
            "name":"praveen",
            "dept":"cse"
        }
        callback(user,null)
    }else{
        let err="error in data fetch"
        callback(err,null)
    }

}

fetch((err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log(err)
    }
}
)
