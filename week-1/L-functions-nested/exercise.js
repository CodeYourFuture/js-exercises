function percentage(a, b) {
  return Math.round((a / (a + b)) * 100) + "%";
}
var studentper = percentage(15, 8);
var mentorper = percentage(8, 15);

function message(name, percentage) {
  return "Percentage " + name + " : " + percentage;
}
console.log(message("students", studentper));
console.log(message("mentors", mentorper));
