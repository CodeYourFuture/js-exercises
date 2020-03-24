/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

function isPlannerBus(element) {
  return element == 'bus';
}
function isPlannerTube(element) {
  return element == 'tube';
}
function isplannerBoat(element) {
  return element == 'river boat';
}

function journeyPlanner(arr, transpo) {
  if (transpo == 'bus') {
    let newArr = [];
    let row1 = arr[0].filter(isPlannerBus);
    let row2 = arr[1].filter(isPlannerBus);
    let row3 = arr[2].filter(isPlannerBus);
    let row4 = arr[3].filter(isPlannerBus);
    if (row1 == 'bus') {
      newArr.push(arr[0][0]);
    }
    if (row2 == 'bus') {
      newArr.push(arr[1][0]);
    }
    if (row3 == 'bus') {
      newArr.push(arr[2][0]);
    }
    if (row4 == 'bus') {
      newArr.push(arr[3][0]);
    }
    console.log(newArr);
    return newArr;
  }
  if (transpo == 'tube') {
    let newArrTube = [];
    let rowTube1 = arr[0].filter(isPlannerTube);
    let rowTube2 = arr[1].filter(isPlannerTube);
    let rowTube3 = arr[2].filter(isPlannerTube);
    let rowTube4 = arr[3].filter(isPlannerTube);
    if (rowTube1 == 'tube') {
      newArrTube.push(arr[0][0]);
    }
    if (rowTube2 == 'tube') {
      newArrTube.push(arr[1][0]);
    }
    if (rowTube3 == 'tube') {
      newArrTube.push(arr[2][0]);
    }
    if (rowTube4 == 'tube') {
      newArrTube.push(arr[3][0]);
    }
    console.log(newArrTube);
    return newArrTube;
  }
  if (transpo == 'river boat') {
    let newArrFinal = [];
    let rowFinal1 = arr[0].filter(isplannerBoat);
    let rowFinal2 = arr[1].filter(isplannerBoat);
    let rowFinal3 = arr[2].filter(isplannerBoat);
    let rowFinal4 = arr[3].filter(isplannerBoat);
    if (rowFinal1 == 'river boat') {
      newArrFinal.push(arr[0][0]);
    }
    if (rowFinal2 == 'river boat') {
      newArrFinal.push(arr[1][0]);
    }
    if (rowFinal3 == 'river boat') {
      newArrFinal.push(arr[2][0]);
    }
    if (rowFinal4 == 'river boat') {
      newArrFinal.push(arr[3][0]);
    }
    console.log(newArrFinal);
    return newArrFinal;
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
