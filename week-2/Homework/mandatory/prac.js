// function formatPercentage(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 100) {
//       arr[i] = 100;
//     }
//     newArr[i] = arr[i].toFixed(2);
//     arr[i] = newArr[i] + "%";
//   }
//   return arr;
// }
// console.log(formatPercentage(23, 18, 187.2, 0.372));

////////////////////////////////////////////////

// function tidyUpString(strArr) {
//   let newStrArr = " ";
//   for (let i = 0; i < strArr.length; i++) {
//     newstrArr[i] = strArr[i].toString();
//     strArr[i] = strArr[i].trim();
//     strArr[i] = strArr[i].split("/").join("");
//     strArr[i] = strArr[i].toLowerCase();
//   }
//   newStrArr =
// }
// console.log(tidyUpString(" Code/ your fuTur/ e "));
/////////////////////

// function tidyUpString() {
//   let string = " Code_youR_fUture/"
//   let tidyString = string.trim()
//   tidyString = string.replace(///g, " ");
//   tidyString = string.toLowerCase()

//   return tidyString;
// }

// console.log(tidyUpString())

// function tidyUpString(strArr) {
//   let stringTrim = strArr.trim();
//   let stringLowerCase = stringTrim.toLowerCase();
//   let stringClean = stringLowerCase.replace(/\//g, " ");
//   return stringClean;
// }
// console.log(tidyUpString(" Code /youR fUtuRe/ "));

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
