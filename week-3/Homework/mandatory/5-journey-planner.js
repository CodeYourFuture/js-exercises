/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

// you don’t need two for loops for this, you only need to loop through arr , then for each array that you loop, you check if it includes the string that you want
// 5:51
// the method of transport (“tube”, “bus”, etc) can be passed as a second argument to journeyPlanner  function, so you don’t need to write it yourself inside of the function

// let locationToVisit = []
// function journeyPlanner(londonLocations, transport) {
//   let locationToVisit = modeOfTravel.filter(e => e.includes(transport));
//   return locationToVisit.map(e => e[0])


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
journeyPlanner([
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
], "tube")  // calling function  (real array, value)
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




