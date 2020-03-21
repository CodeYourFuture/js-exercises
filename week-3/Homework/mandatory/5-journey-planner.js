/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport. //includes(mode of transport)-return index[0]


 */
// let newArr = arr.filter (e=> e[1].includes("tube"))
// return newArr.map(e => e[0])

  // for (i=0; i < arr.length; i++) {
  //   for (j=1; j < arr[i].length; j++){
  //   for(k=2; k < arr[i][j].length; k++) {

//   for (i=0; i < arr.length; i++) {
//     let transport1 = arr.length
//     for (j=1; j < arr[i].length; j++){
//     for(k=2; k < arr[i][j].length; k++) {
// }
//     }
//   }

// function journeyPlanner(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].includes("bus")) {
//         return arr[i][0]
//       }
//       if (arr[i].includes("tube")) {
//         return arr[i][0]
//       }
//       if (arr[i].includes("river boat")) {
//         return arr[i][0]
//       }
//     }
// }

newArr = [] 
 
function journeyPlanner(londonLocations, transport) {  //(real array, value)
  let newArr = londonLocations.filter(e => e.includes(transport))
  console.log(newArr.map(e => e[0]))
  return newArr.map(e => e[0])
}
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
