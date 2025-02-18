// Question 1: Create a Node.js HTTP server that returns the appropriate HTTP
// status code:
// • 404 for invalid routes.
// • 200 for valid GET requests.
// • 500 for internal server errors.


const http=require('http')

const server=http.createServer((res,req)=>{
    if(req.url==='/'){
        res.write('this is home page')
        res.end();
    }
})
server.listen(3000)
console.log("server started at port 3000")