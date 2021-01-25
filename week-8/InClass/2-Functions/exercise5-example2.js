/* 
READ ONLY - this is an example to help you with the next question.

Now we have refactored the code so our calculation is only written once.
If we ever have to change it, we only need to change it in one place.

Remember after refactoring we should still get the SAME result!
Check the output of this code with the last one to check the results are the same.

Now do exercise5-question.js.
*/

function calculateVolume(x, y, z){
    let volume = x * y * z;
    return volume;
}

let width1 = 10;
let height1 = 2;
let length1 = 3;
let volume1 = calculateVolume(width1, height1, length1);

let width2 = 4;
let height2 = 6;
let length2 = 2;
let volume2 = calculateVolume(width2, height2, length2);

let width3 = 8;
let height3 = 3;
let length3 = 5;
let volume3 = calculateVolume(width3, height3, length3);

console.log(volume1);
console.log(volume2);
console.log(volume3);
