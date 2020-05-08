// The words CREATE or DEFINE are used when we create new variables
// so we will use let, var or const

// Define a string
let myAddress = "16 Hope Street";

// Define a number
let myNumber = 16;

// Define a boolean - either true or false
let isRaining = true;

// Defining and then changing a string
let myGreeting = "Hello";
myGreeting = "E kaaro o";
myGreeting = myGreeting + " Sir";
console.log(myGreeting);

// Defining and then changing a number
let numberOfPeople = 5;
numberOfPeople = 7;
numberOfPeople = numberOfPeople + 2;
console.log(numberOfPeople);


let mySonBright = 8;

let isSnowing = true;

let Sammy = "Diamond";
Sammy = "My Diamond is 7 years old";
Sammy = Sammy + " Gold";
console.log(Sammy);


let myOdu = 5;
myOdu = 5;
myOdu = myOdu + 20; 
console.log(myOdu);



// This is a function called convertCurrency
// It has two INPUT PARAMETERs called amount and exchangeRate
// It has a RETURN VALUE which is a number
function convertCurrency(amount, exchangeRate){
    let newAmount = amount * exchangeRate;
    return newAmount;
}
// If we call it on its own, we see no result
convertCurrency(60, 1.2);
// We have to store the value that is RETURNED from our function
let dollarAmount = convertCurrency(60, 1.2);
console.log(dollarAmount);

// function example 1 //

function calculateTax(amount){
    let taxRate = 0.3;
    let poundSterling = amount * taxRate;
    return poundSterling;
}
let taxAmount = calculateTax(120);
console.log(taxAmount);

let newTaxAmount = calculateTax(90);
console.log(newTaxAmount);

newTaxAmount = calculateTax(150);
console.log(newTaxAmount);

 // function example 2 //

function createGreeting(name, age){
    let message = "Hello " + name + " you are age";
    let message2 = "Hello " + name + " you are " + age;
    return message2;
    let logMessage = "Will i see this message again";
    console.log(logMessage);
}
console.log(createGreeting());
console.log(createGreeting("John"));
console.log(createGreeting("Paul", 30));

