/*
Console.log the values of each property of "kitten"
*/
// let kitten = {
//   ageMonths: 3,
//   isFemale: true,
//   furColour: "brown",
// };
// console.log(
//   kitten.ageMonths,
//   kitten["isFemale"],
//   kitten.furColour,
//   kitten.trained
// );

/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*/
let phone = {
  brand: "iPhone",
  model: "iPhone X",
  launchYear: 2017,
  isUnlocked: true,
};
let phoneBrand = phone.brand;
let phoneLaunchYear = phone["launchYear"];
console.log(phoneBrand);
console.log(phoneLaunchYear);
// -> it should output:
// iPhone
// 2017
