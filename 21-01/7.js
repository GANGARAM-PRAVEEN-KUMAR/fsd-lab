// Question 5: Create a function fetchData(url) that returns a promise. If the
//             URL contains the word "error", the promise should reject; otherwise, it
//             should resolve with "Data fetched successfully."


function fetchdata(url){
    return new Promise((resolve,reject)=>{
        if(url.includes("error")){
            reject("failed to fetch data: URL contains 'error'")
         }else{
             resolve("data fetched successfully")
         }
    });
}

fetchdata("https://example.com")
    .then(response=>{console.log(response)})
    .catch(error=>{ console.log(error)});