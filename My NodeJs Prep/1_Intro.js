// Global Variable Declaration :
global.carPrice = "5L";
console.log("Global Declaration : ",carPrice);

// Modules : -> fs,http,os,path
const os = require('os');
console.log("OS PLATFORM : ",os.platform());
console.log("SYSTEM UPTIME : ",os.uptime);
console.log("USER INFO : ",os.userInfo);
console.log("OS RELEASE : ",os.release);

// Components of Request & Response :

//Refer : https://www.freecodecamp.org/news/get-started-with-nodejs/
/*
It has 3 components :
Status Line - Information about message ,Method type(Like GET , POST),URL, Protocolversion and so on.
            - It's a First line of request and response.

Header   - collection of key-value pairs, separated by colon.
         - additional information about the message such as the content type, content length,        caching information, and so on.


Body - Requests, it might contain form data or query parameters.
     - Response , it might contain HTML,XML ,JSON or any other type.


*/


// HTTP METHODS :
/*
GET - Retrieving a resource from server (Read Date) - EG : Entering url in browser address bar

POST - Inserts a resource into server (Insert Data) - EG : Creating new Email account in Gmail

PUT - Update a existing resource in a server (Update Data) - EG : Changing a new password of an email

DELETE - Delete a resource in server (Delete Data) - EG : Delete an email account

*/