// file system

const fs=require('fs')

fs.writeFileSync("./system.txt","this is file system basic commands")

console.log(fs.readFileSync("system.txt","utf-8"))

console.log("this is the end")