let numberOfStudents = 15,
  numberOfMentors = 8,
  total;

total = parseInt(numberOfStudents) + parseInt(numberOfMentors);

console.log(
  "Percentage students: %" + Math.round((numberOfStudents * 100) / total)
);
console.log(
  "Percentage mentors: %" + Math.round((numberOfMentors * 100) / total)
);
