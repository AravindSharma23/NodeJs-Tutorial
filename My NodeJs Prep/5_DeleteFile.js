const fs = require('fs');

// Creating a folder :
// fs.mkdir('./delFolder',(err)=>{
//     if(err){
//         console.log("Error is :",err);
//     }
//     else{
//         console.log("Folder created!")
//     }
// })

// creating a new file in the above folder :
// const data = "Helo Good Morning!!!"
// fs.writeFile('./delFolder/File1.txt',data,(err)=>{
//     if(err){
//         console.log("Error is :",err);
//     }
//     else{
//         console.log("File created!")
//     }
// })

// Delete a file :

fs.unlink('./delFolder/File1.txt',(err)=>{ // fs.unlink('file path',callback function) {}
    if(err){
        console.log("Error is :",err);
    }
    else{
        console.log("File deleted!")
    }
})
