/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/


function journeyPlanner(transportMode){
  const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"]
]
  let bus =[];
  let tube =[];
  let riverBoat =[];
  if(transportMode == "bus"){
    bus = londonLocations.filter(Element => Element[1] == "bus" || Element[2] == "bus" );
    return bus.map(Element => Element[0]);
  } 
  else if(transportMode == "tube"){
    tube = londonLocations.filter(Element => Element[1] == "tube" || Element[2] == "tube" );
    return tube.map(Element => Element[0]);
  } 
  else if(transportMode == "river boat"){
    riverBoat = londonLocations.filter(Element => Element[1] == "river boat" || Element[2] == "river boat" );
    return riverBoat.map(Element => Element[0]);
  }
}
  console.log(journeyPlanner("river boat"));

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

test("journeyPlanner function works - case 1".
  arraysEqual(
    journeyPlanner(londonLocations, "river boat"),
    ["London Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 2".
  arraysEqual(
    journeyPlanner(londonLocations, "bus"),
    ["Angel", "Tower Bridge", "Greenwich"]
  )
)

test("journeyPlanner function works - case 3".
  arraysEqual(
    journeyPlanner(londonLocations, "tube"),
    ["Angel", "London Bridge", "Tower Bridge"]
  )
)