/* 
What is the value we expect to see in the console?

Why do we see "undefined"?

ONLY CHANGE the code of calculateAgeInMonths function - 
please fix this bug so we see the result is "360"
*/

function calculateAgeInMonths(ageInYears){
    let ageInMonths = ageInYears * 12;

}

let myAge = 30;

let myAgeInMonths = calculateAgeInMonths(myAge);

console.log(myAgeInMonths);