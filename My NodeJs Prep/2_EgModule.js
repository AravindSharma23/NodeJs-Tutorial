function myFunction1(){
    console.log("Function1");
}
function myFunction2(){
    console.log("Function 2");
}
function myFunction3(){
    console.log("Function 3");
}
function empDetails(name,role,place){
    console.log(`My Name is ${name} and I am a ${role} . And my native is ${place}`);
}
module.exports = {
    F1 : myFunction1,
    F2 : myFunction2,
    F3 : myFunction3,
    emp : empDetails
} // why we use this because we can call many function in this method of module exports.


/* 
  Here we orerwrite by myFunction2 of export module
module.exports = myFunction1

module.exports = myFunction2

*/