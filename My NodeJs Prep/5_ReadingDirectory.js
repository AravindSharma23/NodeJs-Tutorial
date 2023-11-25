const fs = require('fs');
fs.readdir('mySampleFolder',(err,files)=>{ // fs.readdir(folder name,callback Function)
    if(err){
        console.log("Error : ",err);
    }
    else{
        console.log("Directory read successfully");
        console.log("Files are ",files);
    }
})