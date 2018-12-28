var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

PercentageStudents =  Math.round((numberOfStudents*100)/total);
PercentageMentors = Math.round((numberOfMentors*100)/total);

console.log(`Percentage students: ${PercentageStudents}\nPercentage mentors: ${PercentageMentors}`);