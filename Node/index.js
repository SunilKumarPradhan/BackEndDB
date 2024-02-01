// const fs = require("fs");

// fs.writeFile("Message.txt", "Hello this is my input text whihch i just uploaded",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File created successfully");
//     }
// })

// fs.readFile("Message.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// var generateName = require('sillyname');
import generateName from "sillyname"
var sillyName = generateName();
console.log(sillyName);

