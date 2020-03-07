/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

let pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

let pairsByIndex; // Complete this statement

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairs = pairsByIndex.map(function(indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
