function getAgeInDays(age) {
  return age * 365;
}

function createCreeting(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//write a program that displays the percentage of students and mentors in the group
function calPercentage(firstNum, totalNum) {
  return Math.round((firstNum / totalNum) * 100);
}

//function that creates a message
function createMassage() {
  return "The percentage of "; //+ calPercentage());
}

var calStuPercentage = createMassage() + "Student is " + calPercentage(15, 23);
console.log(calStuPercentage + "%");

var calMentorPercentage =
  createMassage() + "Mentors is " + calPercentage(8, 23);
console.log(calMentorPercentage + "%");
