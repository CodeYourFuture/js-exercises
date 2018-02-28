// This first
function sum(x, y) {
  return x + y;
}
function buildAgeMessage(age) {
  return "We are " + age + " years old.";
}
var mentorAge = 30;
var studentAge = 25;
var combinedAge = sum(mentorAge, studentAge);
console.log(buildAgeMessage(combinedAge));
