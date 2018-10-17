const numberOfStudents = 15;
const numberOfMentors = 8;
const total= numberOfStudents + numberOfMentors;
const perStudents= Math.round(numberOfStudents * 100 /total);
const perMentors= Math.round(numberOfMentors * 100 / total);
console.log("Percentage students: " + perStudents + "%" );
console.log("Percentage mentors: " + perMentors + "%" );