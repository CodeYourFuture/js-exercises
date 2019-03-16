/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value `findPairs` should return `false`
  - Add a check for null values, and if one exists, return `false`
  - Do not edit any of the existing code
*/

function findPairs(students, mentors, pairsByIndex) {
  // -- Write your code here -->

  var pairs = pairsByIndex.map(function(indexes) {
    var student = students[indexes[0]];
    var mentor = mentors[indexes[1]];
    return [student, mentor];
  });

  return pairs;
}

// DEBUG
var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

var pairs = findPairs(students, mentors, pairsByIndex);
console.log(pairs);

module.exports = { findPairs };
