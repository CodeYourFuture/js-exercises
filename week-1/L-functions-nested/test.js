function getAgeInDays(age) {
  return age * 365;
}
function createGreeting(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}
console.log(createGreeting("Ahmed", 4));
//console.log(mentors);
//for (i = 0; i < mentors.length; i++) {
// console.log("Hello " + mentors[i]);
//}

//mentors.map(x => console.log("Hello " + x));

//var foo = [1, 2, 3, 4, 5];
