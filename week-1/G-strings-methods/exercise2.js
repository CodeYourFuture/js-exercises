// Start by creating a variable `message`
var myName = "   Raj   ";
var lengthOfMyName = myName.length;
var message = "My name is " + myName + " and my name is " +  lengthOfMyName + " characters long";
console.log("\n*****************message before trim***************");
console.log("My name: " + myName);
console.log(message); 
console.log("\n*****************message after trim***************");
myName = myName.trim();
lengthOfMyName = myName.length;
message =  "My name is " +  myName +  " and my name is " +
  lengthOfMyName +
  " characters long";
console.log("My name: " + myName);
console.log(message);

