/*
 Colonisers would like to bring some researchers to the planet to scrutinise the surface. 
  
 They also need pupils who would act as assistants. Unfortunately, the number
 of seats is limited on the spaceship therefore they set the following algorithm
 to select students:

 Only students who have attended enough classes are eligible to join the research teams.

 Finish the "getEligibleStudents" function which:
  - Accepts an array which contains all the students' names and their attendance counts
    For example:
    [
      ["Hunor", 10],
      ["Magor", 1]
    ]
    See that each student's information is stored separately as an embedded array.
    This is also called as 2 dimensional array when you can find array inside of array.

  - Returns an array containing only the names of the who have attended AT LEAST 8 classes

  
*/

// Remember how to access to embedded arrays

let twoDimensionalArray = [
  ["cat", "dog"],
  ["giraffe", "lion", "elephant"]
];

// Examples accessing to array element directly
// Example 1
let pets = twoDimensionalArray[0]; // this reads the first embedded array 
console.log(pets[1]); // this prints "cat" to the console

// Example 2
// You can also read straight the element of an embedded array:
console.log(twoDimensionalArray[1][2]);
// This reads the second embedded array and then reads its last element and finally prints "elephant" to the console

// Examples accessing to array element through array methods
// Example 1
let moreThanTwoArrays = twoDimensionalArray.filter(embeddedArray => embeddedArray.length > 2);
console.log(moreThanTwoArrays);
// This filter only keeps embededd arrays that have more than 3 elements

// Example 2
let arrayLengths = twoDimensionalArray.map(embeddedArray => embeddedArray.length);
console.log(arrayLengths);
// This gives back how many elements of each array have

/* + + + + + + + */
/* Now try the exercise */

function getEligibleStudents(classes) {
  
  const getEligible = classes.filter(alphaStudentGroup=> alphaStudentGroup.length));
return alphaStudentGroup.str.toUpperCase()
})
console.log(getEligible);

/*
 
 Later leaders of Alpha planet decided to change the rule as below:

 Only students whose name starts with the same letter of the name of the planet are eligible to join.

 Implement the body of function called "getEligibleStudents2" which:
  - Accepts an array in the same structure as before.
  - Returns an array containing only the names that satisfies the new rule.
  
  Note:
  Unfortunately, administrators messed up the letter casing of names, sometimes it starts with small letter.

  Hint: To complete the function, search how to change text to lower or upper case by using string method.
*/

function getEligibleStudents2(classes) {
  let nonEligible = classes.map(deltaStudentGroup => deltaStudentGroup.length)
  return deltaStudentGroup.charAt(0) === "A" && namesStart.includes(0,3);
 
} 
console.log(nonEligible);
/* ======= TESTS - DO NOT MODIFY ===== */

const alphaStudentGroup = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
  ["Bob", 9],
  ["Lee", 1]
]

const deltaStudentGroup = [
  ["Zoidber", 6],
  ["Bender", 5],
  ["Zapp", 7],
  ["amy", 0]
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

test("eligibleStudents function works",
  arraysEqual(getEligibleStudents(alphaStudentGroup), ["Ahmed", "Clement", "Tayoa", "Nina", "Bob"])
)

test("eligibleStudents function without eligible candidates",
  arraysEqual(getEligibleStudents(deltaStudentGroup), [])
)

test("eligibleStudents function with no candidates",
  arraysEqual(getEligibleStudents([]), [])
)

test("eligibleStudents2 function works",
  arraysEqual(getEligibleStudents2(alphaStudentGroup), ["Ahmed", "Adam"])
)

test("eligibleStudents2 function without eligible candidates",
  arraysEqual(getEligibleStudents2(deltaStudentGroup), ["amy"])
)

test("eligibleStudents2 function with no candidates",
  arraysEqual(getEligibleStudents2([]), [])
)
