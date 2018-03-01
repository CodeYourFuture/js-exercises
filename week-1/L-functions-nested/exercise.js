var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
function percent(mentorcount, studentscount) {
  var mentorpercent = Math.round(
    mentorcount / (mentorcount + studentscount) * 100
  );
  var studentspercent = Math.round(
    studentscount / (mentorcount + studentscount) * 100
  );

  console.log("Percentage mentors: " + mentorpercent + "%");
  console.log("Percentage students: " + studentspercent + "%");
}
console.log(mentors);
for (i = 0; i < mentors.length; i++) {
  console.log("Hello " + mentors[i]);
}
