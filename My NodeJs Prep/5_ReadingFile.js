const fs = require('fs');

fs.readFile('./mySampleFolder/Sample.txt',{encode:'utf-8'},(err,data)=>{
   if(err){
    console.log("Error : ",err);
   }
   else{
    console.log("File Read successfully");
    console.log("Data in File : ",data);
   }
})