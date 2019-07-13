/* function numberOfMentors(mentors, students) {
  var totalOfMentors = (mentors / (mentors + students)) * 100;

  var percentageOfMentors = Math.round(totalOfMentors);

  var totalOfStudents = 100 - percentageOfMentors;
  var name = [percentageOfMentors, totalOfStudents];
  return name;
}
var totalOfMentors = numberOfMentors(8, 15);
*/

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//var totalOfMentors = [mentor1, mentor2, mentor3, mentor4, mentor5];
// ------------------ First code ---------
// function uCase(string) {
//   return string.toUpperCase();
// }
// function greeting(string) {
//   return "Hello " + uCase(string);
// }
// for (i = 0; i < totalOfMentors.length; i++) {
//   totalOfMentors[i] = greeting(totalOfMentors[i]);

// -----------------------Third code ---------------
//   console.log(totalOfMentors[i]);
// }
// function greet(a) {
//   return a.toUpperCase();
// }
// for (i = 0; i < totalOfMentors.length; i++) {
//   namee = greet("Hello " + totalOfMentors[i]);
//   console.log(namee);
// }

var totalOfMentors = [];

totalOfMentors.push(mentor1, mentor2, mentor3, mentor4, mentor5);

totalOfMentors.forEach((a, v) => {
  v = function(b) {
    return b.toUpperCase();
  };
  console.log(`${v("hello")} ${a.toUpperCase()}`);
});
