// exerice 1
function mentorspercentage(mentor) {
  return (mentor / 23) * 100;
}

function studentspercentage(student) {
  return (student / 23) * 100;
}

function fullgreting() {
  var mentorpercent = mentorspercentage(8);
  var studentpercent = studentspercentage(15);
  var message =
    "My Name is " +
    mentorpercent +
    " and I was born over " +
    studentpercent +
    " days ago!";
  return message;
}
const fullsentence = fullgreting();
console.log(fullsentence);

// exercise 2

// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";
