function studentsAndMentors(students, mentors) {
  var ishuli = students + mentors;
  var percentStudents = students / ishuli;
  var percentMentors = mentors / ishuli;
  var percentStudentsRounded = Math.round(percentStudents) * 100;
  var percentMentorsRounded = Math.round(percentMentors) * 100;
  var message = "Percent students :" + percentStudentsRounded + "%";

  return message;
}

var final = studentsAndMentors(15, 20);

console.log(final);
