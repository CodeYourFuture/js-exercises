// var name1 = "rares";
// var name2 = "mozafar";
// var name3 = "daniel";

// console.log(name1);
// console.log(name2);
// console.log(name3);

var mentors = ["rares", "mozafar", "daniel", "cris", "luke"];
var grades = [1, 5, 1];

mentors[0] = "yohanes";
mentors[1] = "nate";
mentors[mentors.length - 2] = "abdul";

var firstThreeMentors = mentors.slice(2, 5);

console.log(firstThreeMentors);

/*
EXPECTED RESULT
  ---------------
  ["daniel","abdul","luke"]
*/
