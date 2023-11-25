 // Renaming a file or directory :

 const fs = require('fs'); // fs.rename(oldpath,newpath,callback)
 fs.rename('./mySampleFolder/Eg.txt','./mySampleFolder/Example.txt',(err)=>{
    if(err){
        console.log("Error is ",error);
    }else{
        console.log("File Name changed")
    }
 })