/*
ONLY CHANGE LINE 23 to answer this question

This code has a bug - run it and see what the result is

Why are we getting this result?

Please fix this code so we get the result "38"

ONLY CHANGE LINE 23
*/

function calculateAge(yearOfBirth, currentYear){
    let age = currentYear - yearOfBirth;
    return age;
}

let yearIWasBorn = 1982;

let thisYear = 2020;

// ONLY CHANGE CODE ON LINE 23
let myAge = calculateAge(thisYear, yearIWasBorn);

console.log(myAge);