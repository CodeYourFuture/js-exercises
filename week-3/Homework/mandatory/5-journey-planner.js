/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/

function journeyPlanner(arr, transport) {
  var newArr = [];
  for (x = 0; x < arr.length; x++) {
    for (y = 0; y < arr[x].length; y++) {
      if (arr[x][y].includes(transport)) {
        newArr.push(arr[x][0]);
      }
    }
  }
  console.log(newArr);
}
/* ======= TESTS - DO NOT MODIFY ===== */
@ -18, 7 + 26, 7 @@ const londonLocations = [
  ["London Bridge", "tube", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
]
];

function arraysEqual(a, b) {
  if (a === b) return true;
  @ -33, 33 + 41, 33 @@function arraysEqual(a, b) {
  }

  function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }

    console.log(`${test_name}: ${status}`);
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }

    console.log(`${test_name}: ${status}`);
  }

  test("journeyPlanner function works - case 1".
    arraysEqual(
      test(
        "journeyPlanner function works - case 1".arraysEqual(
          journeyPlanner(londonLocations, "river boat"),
          ["London Bridge", "Greenwich"]
        )
      )
    );

  test("journeyPlanner function works - case 2".
    arraysEqual(
      test(
        "journeyPlanner function works - case 2".arraysEqual(
          journeyPlanner(londonLocations, "bus"),
          ["Angle", "Tower Bridge", "Greenwich"]
          ["Angel", "Tower Bridge", "Greenwich"]
        )
      )
    );

  test("journeyPlanner function works - case 3".
    arraysEqual(
      test(
        "journeyPlanner function works - case 3".arraysEqual(
          journeyPlanner(londonLocations, "tube"),
          ["Angle", "London Bridge", "Tower Bridge"]
          ["Angel", "London Bridge", "Tower Bridge"]
        )
      )
    );