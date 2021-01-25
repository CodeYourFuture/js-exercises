/*
ONLY CHANGE LINE 23 to answer this question

This code has a bug - if we run it we see the result "John undefined"

Why are we getting this result?

Please fix this code so we get the result "John Legere"

ONLY CHANGE LINE 23
*/

function fullName(firstName, surname) {
  let fullName = firstName + " " + surname;
  return fullName;
}

let customerFirstName = "John";

let customerSurname = "Legere";

// ONLY CHANGE CODE ON LINE 23
let customerFullName = fullName(customerFirstName, customerSurname);

console.log(customerFullName);
