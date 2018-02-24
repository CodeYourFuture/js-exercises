function percentage(mentorCount, studentsCount) {
  var mentorPercent = Math.round(
    mentorCount / (mentorCount + studentsCount) * 100
  );
  var studentsPercent = Math.round(
    studentsCount / (mentorCount + studentsCount) * 100
  );
  /*console.log(
    "mentorPercent = " + mentorPercent,
    "studentsPercent = " + studentsPercent
  );*/
  printMessage(mentorPercent, studentsPercent);
}
function printMessage(mentorPercent, studentsPercent) {
  console.log("------------------------------------------");
  console.log((message1 = "Percentage mentors: " + mentorPercent + "%"));
  console.log((message2 = "Percentage students: " + studentsPercent + "%"));
  console.log("------------------------------------------");
}
percentage(15, 8);
