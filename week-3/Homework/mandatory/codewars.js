// // function findNeedle(haystack) {
// //   let indexOfNeedle = haystack.forEach(function(x, index) {
// //     if (x === "needle") {
// //       return `found the needle at position ${index}`;
// //     }
// //   });
// //   return indexOfNeedle;
// //   //   return `found the needle at position ${indexOfNeedle}`;
// // }

// // function findNeedle(haystack) {
// //   haystack.forEach(function(x, index) {
// //     if (x === "needle") {
// //       return (ind = index);
// //     }
// //   });
// //   return `found the needle at position ${ind}`;
// // }

// // function findNeedle(haystack) {
// //   haystack.some((x, index) => {
// //     if (x === "needle") {
// //       ind = index;
// //     }
// //   });
// //   return `found the needle at position ${ind}`;
// // }

// // console.log(
// //   findNeedle([
// //     "3",
// //     "123124234",
// //     undefined,
// //     "needle",
// //     "world",
// //     "hay",
// //     2,
// //     "3",
// //     true,
// //     false
// //   ])
// // );

// var number = function(busStops) {
//   let peopleIn = busStops.map(element => element[0]).reduce((a, b) => a + b, 0);
//   let peopleOut = busStops
//     .map(element => element[1])
//     .reduce((a, b) => a + b, 0);
//   console.log(`peopleIn: ${peopleIn}`);
//   console.log(`peopleOut: ${peopleOut}`);
//   return peopleIn - peopleOut;
// };

// number([
//   [10, 0],
//   [3, 5],
//   [5, 8]
// ]);

// function sumArray(array) {
//   let arrLen = array.length;
//   return Array.isArray(array) && arrLen > 0 && array !== null
//     ? array
//         .sort((a, b) => a - b)
//         .splice(1, arrLen - 2)
//         .reduce((a, b) => a + b)
//     : 0;
// }

// sumArray([6, 2, 1, 8, 10]);

// function sumArray(array) {
//   return array === null || array.length === 0
//     ? 0
//     : array
//         .sort((a, b) => a - b)
//         .splice(1, array.length - 2)
//         .reduce((a, b) => a + b, 0);
// }

// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     return [];
//   }
//   let positiveArray = input.filter(x => x > 0);
//   let negativeArray = input.filter(x => x < 0);
//   let returnedArray = [];
//   returnedArray.push(
//     positiveArray.length,
//     negativeArray.reduce((a, b) => a + b, 0)
//   );
//   return returnedArray;
// }

// function noSpace(x) {
//   for (let i = 0; i < x.length; i++) {
//     let currentChar = x.charAt(i);
//     if (currentChar == " ") {
//       let xNoSpaces = x.replace(currentChar, "");
//     }
//   }
//   return xNoSpaces;
// }

function noSpace(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    let character = x.charAt(i);
    if (character !== " ") {
      newArr.push(character);
    }
  }
  return newArr.join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
