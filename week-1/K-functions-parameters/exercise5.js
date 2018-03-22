// Declare your function here

// const greeting = createLongGreeting("Daniel", 30);

// console.log(greeting);
// function students(studentName1, studentName2) {
//   return "hello" + studentName1 + studentName2;
// }
// var student1 = "Lesley";
// var student2 = "Rukmini";
// console.log(students(student1, student2));
// var age = 20;

// function increasedAge(age) {
//   return age * 2;
// }

// function myNameAndMyAge(name, age) {
//   var multipleAge = increasedAge(age);
//   return "myname is " + name + "iam " + multipleAge + " years old";
// }

// console.log(myNameAndMyAge("Rukmini", 20));e) {

function mentorAge(age) {
  return age * 4;
}
function increasedAge(name, age) {
  var changedAge = mentorAge(age);
  return "Iam" + name + changedAge + "years old";
}

console.log(increasedAge("Won", 25));
