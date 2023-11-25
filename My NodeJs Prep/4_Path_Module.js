const path = require('path');

const myPath = '1_Intro.js'  // It's file name .

console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.basename(myPath));
console.log(path.parse(myPath));
