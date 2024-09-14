const fs = require('fs');
const fspromises = require('fs').promises;
//file writing
fs.writeFile('example.txt','hello guys i am harish',(err)=>
{
    if(err) throw err;
    console.log("done successfully");
});
fs.appendFile('example.txt','\n hello me',(err)=>{
    if(err) throw err;
    console.log("appended");
});
//file writing
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});