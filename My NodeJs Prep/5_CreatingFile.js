
const fs = require('fs');
const data = "What a power you know!";
// Creating a new File if its not present and if file is there means update a data in it .

// fs.writeFile('./mySampleFolder/Sample.txt',data,(err)=>{   
//    if(err){
//     console.log("Error",err);

//    }
//    else{
//     console.log("No error ");
//    }
// })



// It updates a data to a file without removing previos data in it,
fs.writeFile('./mySampleFolder/Sample.txt',data,{flag:'a'},(err)=>{   
   if(err){
    console.log("Error",err);     // syntax: fs.writeFile(filePath , data , flag , callbackfunction)

   }
   else{
    console.log("No error ");
   }
})

