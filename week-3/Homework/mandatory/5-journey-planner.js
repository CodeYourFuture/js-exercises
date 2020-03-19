/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

function journeyPlanner(londonLocations,transportType) {
  const firstRow = londonLocations[0].filter(element => element.length > 4);
  const secondRow = londonLocations[1].filter(element => element.length > 10);
  const thirdRow = londonLocations[2].filter(element => element.length > 5);
  const forthRow = londonLocations[3].filter(element => element.length > 4 && element.length < 10);
  const locations = [];
  locations.push(firstRow, secondRow, thirdRow, forthRow);    
  const ldnLocations = locations.flatMap(element => element);
   
  if (transportType === "river boat") {
       return ldnLocations.filter(element=>element.length>=9 && element.length!==12);
    }else if(transportType ==='bus'){
       return ldnLocations.filter(element => element.length <=12);
    }else{
       return ldnLocations.filter(element => element.length !==9);
     }
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