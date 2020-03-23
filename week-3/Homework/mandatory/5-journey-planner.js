/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.

- if else statement 
- for loop
- .includes 
- .filter 
- .map
- .find - no
- array with three dimension
- column index [[0][1][2]]

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
]
londonLocations, "tube"),===
    ["Angel", "London Bridge", "Tower Bridge"]
londonLocations, "bus"),===
    ["Angel", "Tower Bridge", "Greenwich"]
londonLocations, "river boat"), ===
    ["London Bridge", "Greenwich"]
*/


// function journeyPlanner(oldArr) {
  
//     let initialArr1 = oldArr.map(e => e[0])

//     return initialArr1.push(oldArr.length)
//  ["Angel" 0, "tube" 1, "bus" 2],}
// journeyPlanner([
//   ["Angel", "tube", "bus"],
//   ["London Bridge", "tube", "river boat"],
//   ["Tower Bridge", "tube", "bus"],
//   ["Greenwich", "bus", "river boat"]
// ], "bus")  // calling function 
//
//newArr = [] = this a global variable -no longer because it is inside the function
//function name(arg1, arg2){
//return
//}
//(real array, value)
function journeyPlanner(londonLocations, transport) {
  let newArr = londonLocations.filter(e => e.includes(transport))
  console.log(newArr.map(e => e[0]))
  return newArr.map(e => e[0])
}

// function journeyPlanner(londonLocations, transport) {
//   let newArr = londonLocations.filter(e => e.includes("bus"))  //value is changed to "tube" and "river boat" 
//   console.log(newArr.map(e => e[0]))
//   return newArr.map(e => e[0])
// }  this is not 'dynamic' - as we had to change the value each time now we need to make "bus, tube, river boat" generic so we changed it t "transport"


// journeyPlanner([
//   ["Angel", "tube", "bus"],
//   ["London Bridge", "tube", "river boat"],
//   ["Tower Bridge", "tube", "bus"],
//   ["Greenwich", "bus", "river boat"]
// ], "bus")  // calling function 

// journeyPlanner([
//   ["Angel", "tube", "bus"],
//   ["London Bridge", "tube", "river boat"],
//   ["Tower Bridge", "tube", "bus"],
//   ["Greenwich", "bus", "river boat"]
// ], "tube")  // calling function  (real array, value)

// journeyPlanner([
//   ["Angel", "tube", "bus"],
//   ["London Bridge", "tube", "river boat"],
//   ["Tower Bridge", "tube", "bus"],
//   ["Greenwich", "bus", "river boat"]
// ], "river boat")  // calling function 



/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
]

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
}

test("journeyPlanner function works - case 1",
  arraysEqual(
    journeyPlanner(londonLocations, "river boat"),
    ["London Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 2",
  arraysEqual(
    journeyPlanner(londonLocations, "bus"),
    ["Angel", "Tower Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 3",
  arraysEqual(
    journeyPlanner(londonLocations, "tube"),
    ["Angel", "London Bridge", "Tower Bridge"]
  )
)
