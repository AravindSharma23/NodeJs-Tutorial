

const fs = require('fs');
fs.mkdir('./mySampleFolder',(err)=>{   // Creating a folder by this way
    if(err){
        console.log("Error is : ",err);
    }else{
        console.log("Folder successfully created!!!");
    }
})