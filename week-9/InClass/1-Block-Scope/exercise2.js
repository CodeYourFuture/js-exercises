/*
 This code throws an error. By keeping only the single console.log(), can you move it to a different line so that it logs:
  1. "Astrid"
  2. Now move it to a different line so that it logs "Reyam"
  3. And finally, "Awet"
  4. BONUS: change the "car" variable, and move the console.log() to a different line, so it logs "Richard"
*/

let car = "BMW";
let driverName = "Astrid";
console.log(driverName);
if (car === "BMW") {
  let driverName = "Reyam";
  console.log(driverName);
  let carModel = "4 Series";
} else {
  let driverName = "Richard";
}

driverName = "Awet";
console.log(driverName);
