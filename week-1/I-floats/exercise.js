var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var perstudent = Math.round((100 * numberOfStudents) / total);
var permentors = Math.round((100 * numberOfMentors) / total);
console.log(perstudent + "%");
console.log(permentors + "%");
