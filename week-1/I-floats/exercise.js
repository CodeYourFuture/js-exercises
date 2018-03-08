var numberOfStudents = 15;
var numberOfMentors = 8;
var preciseAge = 30.612437;
var roughAge = Math.round(preciseAge);
console.log(roughAge);
var studentpercent = Math.round(
  numberOfStudents / (numberOfMentors + numberOfStudents) * 100
);
var mentorpercent = Math.round(
  numberOfMentors / (numberOfMentors + numberOfStudents) * 100
);
console.log("Percentage mentors: " + mentorpercent + "%");
console.log("Percentage students: " + studentpercent + "%");
