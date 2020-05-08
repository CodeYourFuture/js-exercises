/*
 Before we go the big story; we will introduce more string methods.
 Some of the methods you're using in Array have similar ones with strings.

 Methods like : IndexOf, Include, Search, Slice , Spilt and more.
 
 You can always google how a method of a string works!
 Here are links to some of those:
  - https://www.w3schools.com/js/js_string_methods.asp
  - https://javascript.info/string#quotes


 Now let's do this small exercise
 
 Using string methods update the checkCodeIsThere() function
  - The function will have a string as a paramter
  - The function should check if the string has the word "code" exists in the string
  - If it does exist, return the index of it, if not return "Not found"

 Hint: search for string methods like Includes and IndexOf.
*/

function checkCodeIsThere(stringText) {
  let magicWord = "code";
  //edit code below
  if (stringText.includes(magicWord)) {
    let positionOfCode = stringText.indexOf(magicWord);
    return positionOfCode;
  } else {
    return "Not found";
  }
}

/*function checkCodeIsThere(stringText) {
  let magicWord = "code";
  //edit code below
  if (stringText.includes(magicWord)) {
    // you can also use if(stringText.indexOf(magicWord)>=0)
    return stringText.indexOf(magicWord);
  } else {
    return "Not found";
  }
}*/

/*
  I am new to London and would like to know what transport I can take to different famous locations.
  The input provided contains a list of locations in London. Each of locations is followed by a list
  of transport modes that can be used to get there.

  Let's see an example:
  
  To take to Tower Bridge, you can use tube or river boat. This information will represented as 
    ["Tower Bridge", "tube", "river boat"]

  Where
    the 1st element says the name of the location,
    and rest of them says the transport modes.

  You will then get a list of these information, e.g:
  [
    ["Tower Bridge", "tube", "river boat"],
    ["Abbey road", "double decker"],
    ["London Eye", "tube", "river boat", "bus"]
  ]

  You have to finish up the body of journeyPlanner function that should tell where I can go if I only
  want to use a specific mode of transport. But before jumping straight to the main function, we will
  break down the whole task into smaller steps that make our job easier.

  This technic is also referred as problem decomposition. It helps you to reduce scope of the problem 
  by only focusing on a small chunk of the whole problem at a time.)
*/

/*
  Implement the function getTransportModes that
   - Accepts an array containing the location and available transport modes
     e.g: ["Tower Bridge", "tube", "river boat"]
   - Returns an array including the available transport modes to the given location
     e.g: ["tube", "river boat"]
  
  Hint: Use the corresponding array method to split the array.
*/
function getTransportModes(locationName) {
  let availableTransport = locationName.slice(1, locationName.length);
  return availableTransport;
}
/*function getTransportModes(travelDetails) {
  return travelDetails.slice(1); // returns last 2 items of the array, does not have the first item
}*/

/*
  Implement the function isAccessibleByTransportMode that
   - Accepts two parameters:
     1) First parameter is an array of transport modes
        e.g: ["tube", "river boat"]
     2) Second parameter is a string containing a transport mode
        e.g: "river boat"
     
   - Returns 
     * True if the location in the first parameter is accessible by the transport mode given in
      second parameter
     * Otherwise, returns false

  Hint: Use the corresponding array method to decide if an element is member of an array.
*/
function isAccessibleByTransportMode(arr, str) {
  let checkTrnasport = arr.includes(str);
  return checkTrnasport;
}
/*function isAccessibleByTransportMode(transportModes, transport) {
  return transportModes.includes(transport); // returns a boolean value
}*/
/*
  Implement the function getLocationName that
   - Accepts a location and available transports in an array
     e.g:["Tower Bridge", "tube", "river boat"]
   - Returns the name of the location
     e.g: "Tower Bridge"
*/
function getLocationName(nameOfPlace) {
  let getTrnsport = nameOfPlace[0];
  return getTrnsport;
}
/*function getLocationName(travelDetails) {
  return travelDetails[0]; // "Tower Bridge" - student must return this string
}*/

/*
 We arrived at the final method. it won't take long if you use the previously implemented functions wisely.

 Finish up the implemention of the function journeyPlanner that
  - Accepts two parameters:
    1) An array with a list of locations' and their transports
       e.g:
       [
         ["Angel", "tube", "bus"],
         ["London Bridge", "tube", "river boat"]
       ]
    2) A string containing a transport mode
       e.g: "bus"

  - Returns an array of where I can go if I only want to use a specific mode of transport.
    NOTE: only the location names should be returned, not the name of transports.

  Hint:
   - Use the function you implemented above.
   - Use array method to remove locations that is not accessible by the given transportMode.
   - Use array method to manipulate its elements.
   
  Advanced challange: try to use arrow function when invoking an array method.
*/
function journeyPlanner(locations, transportMode) {
  let locName = locations.filter(function (Arr) {
    let selectedPlace = Arr.includes(transportMode);
    return selectedPlace;
  });
  return locName;
}
/*function journeyPlanner(locations, transportMode) {
  // Implement the function body
  const travelablelocations = locations
    .filter((location) => location.includes(transportMode)) // filter correct location details
    .map((location) => {
      const locationName = location[0]; // grab the string name, which is the first string at the start
      return locationName;
    });

  return travelablelocations;
}*/

// Implement the function body

/* ======= TESTS - DO NOT MODIFY ===== */

const string1 = "I Love coding and perfect code makes me happy";
const string2 = "I don't like to do coding";
const string3 = "Can you scan the barcode for me";

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

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

test(
  "checkCodeIsThere function works - case 1",
  checkCodeIsThere(string1) === 26
);

test(
  "checkCodeIsThere function works - case 2",
  checkCodeIsThere(string2) === "Not found"
);
test(
  "checkCodeIsThere function works - case 3",
  checkCodeIsThere(string3) === 20
);

test(
  "getTransportModes function works",
  arraysEqual(getTransportModes(["Angel", "tube", "bus"]), ["tube", "bus"])
);

test(
  "isAccessibleByTransportMode function works - positive case 1",
  arraysEqual(isAccessibleByTransportMode(["tube", "bus"], "tube"), true)
);

test(
  "isAccessibleByTransportMode function works - negative case 1",
  arraysEqual(isAccessibleByTransportMode(["tube", "bus"], "river boat"), false)
);

test(
  "isAccessibleByTransportMode function works - negative case 2",
  arraysEqual(
    isAccessibleByTransportMode(["tube", "bus", "river boat"], "boat"),
    false
  )
);

test(
  "getLocationName function works - case 1",
  arraysEqual(
    getLocationName(["London Bridge", "tube", "river boat"]),
    "London Bridge"
  )
);

test(
  "getLocationName function works - case 2",
  arraysEqual(getLocationName(["Angel", "tube", "bus"]), "Angel")
);

test(
  "journeyPlanner function works - case 1",
  arraysEqual(journeyPlanner(londonLocations, "river boat"), [
    "London Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 2",
  arraysEqual(journeyPlanner(londonLocations, "bus"), [
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 3",
  arraysEqual(journeyPlanner(londonLocations, "tube"), [
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ])
);
