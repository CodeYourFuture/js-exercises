/* Remember to look at the error message, identify the 
type of error, and see which line the error is on

Then please fix the error! */

function calculateAgeInMonths(ages){
    let newArray = ages.map(multiplyBy12);
    return newArray;
}

function multiplyBy12(age){
    return age * 12;
}

let peopleAges = [4, 28, 55, 15];

let agesInMonths = calculateAgeInMonths();

console.log(agesInMonths);