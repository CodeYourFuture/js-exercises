/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
// function journeyPlanner(select, vehicle) {
//   let common = [];
//   for (let i = 0; i < select.length; i++) {
//     if (select[i].includes(vehicle)) {
//       common.push(select[i][0]);
//     }
//   }
//   return common;
// }

function journeyPlanner(arr, mean) {
  return arr.filter(x=> x.includes(mean)).map(x => x= x[0])
}

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
  ["Angle", "tube", "bus"], //1. item
  ["London Bridge", "tube", "river boat"], // 2. item
  ["Tower Bridge", "tube", "bus"], // 3. item
  ["Greenwich", "bus", "river boat"] // 4. item
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
    ["Angle", "Tower Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 3",
  arraysEqual(
    journeyPlanner(londonLocations, "tube"),
    ["Angle", "London Bridge", "Tower Bridge"]
  )
)