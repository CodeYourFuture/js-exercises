const numberOfStudents = 15;
const numberOfMentors = 8;
const totalNumbers = numberOfMentors + numberOfStudents;
const studentPer = (numberOfStudents * 100) / totalNumbers;
const mentorsPer = (numberOfMentors * 100) / totalNumbers;
console.log(`Percentage students: ${Math.round(studentPer)}%`);
console.log(`Percentage mentors: ${Math.round(mentorsPer)}%`);
