function percentage(Students, Mentors) {
  var studentPercentage = Math.round(100 * Students / (Students + Mentors));
  return studentPercentage;
}

function text(Students, Mentors) {
  var findPercentage = percentage(Students, Mentors);
  var mentorPercentage = 100 - findPercentage;
  var message =
    "percentsge of students is " +
    findPercentage +
    "% and percentage of mentors is " +
    mentorPercentage +
    "%";
  return message;
}

console.log(text(15, 8));

//...........Exercise2......

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spell(name) {
  var mentorName = name;
  return mentorName;
}

function createGreeting(great, name) {
  var getName = spell(name);
  var shoutyMessage = (great + "" + getName).toUpperCase();
  return shoutyMessage;
}
console.log(createGreeting("hello ", mentor1));
console.log(createGreeting("hello ", mentor2));
console.log(createGreeting("hello ", mentor3));
console.log(createGreeting("hello ", mentor4));
console.log(createGreeting("hello ", mentor5));
