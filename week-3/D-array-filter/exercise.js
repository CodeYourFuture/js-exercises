/*
  You are given a function that gets pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the function
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 10 to produce an array with valid content
  - Do not edit any of the other existing code
*/

function findPairs(students, mentors, pairsByIndex) {
  var pairsByIndexFiltered; // <-- Complete this statement

  var pairs = pairsByIndexFiltered.map(function(indexes) {
    var student = students[indexes[0]];
    var mentor = mentors[indexes[1]];
    return [student, mentor];
  });

  return pairs;
}

// DEBUG
var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

const pairs = findPairs(students, mentors, pairsByIndex);

console.log(pairs);

module.exports = { findPairs };
