const myOperatingSystem = require('os');

console.log("My Platform : ",myOperatingSystem.platform());
console.log("My system uptime : ",myOperatingSystem.uptime());
console.log("My Info",myOperatingSystem.userInfo());
console.log(" Release : ",myOperatingSystem.release());
console.log("Total Memory : ",myOperatingSystem.totalmem())
console.log("Free Memory : ",myOperatingSystem.freemem());