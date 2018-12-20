var student = 104;
var mentor = 56;
var total = student + mentor;
var percentMentor = Math.round((mentor * 100) / total);
var percentStudent = Math.round((student * 100) / total);
function message() {
  var var1 =
    "percentage of mentors is " +
    percentMentor +
    "%" +
    " and percentage of student is  " +
    percentStudent +
    "%";

  return var1;
}
console.log(message());
