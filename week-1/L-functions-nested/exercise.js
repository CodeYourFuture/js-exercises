var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var mentorArray = [mentor1, mentor2, mentor3, mentor4, mentor5];

function toUpCase(string) {
  return string.toUpperCase();
}
function createGreeting(string) {
  return "HELLO " + toUpCase(string);
}

for (var i = 0; i < 5; i++) {
  mentorArray[i] = createGreeting(mentorArray[i]);
  console.log(mentorArray[i]);
}

function calculatePercentage(num1, num2) {
  // check if the first number is bigger than the second.
  // If true switch the numbers.
  if (num1 > num2) {
    var placeholder = num1;
    num1 = num2;
    num2 = placeholder;
  }

  var lowerPercentage = (num1 / (num1 + num2)) * 100;

  var preciseLowerPercentage = Math.round(lowerPercentage);

  var higherPercentage = 100 - preciseLowerPercentage;

  var returnArray = [preciseLowerPercentage, higherPercentage];

  return returnArray;
}

function createMessage(num, num2) {
  var percentage = calculatePercentage(num, num2);

  var message = "Percentage students: " + percentage[1];
  var message2 = "Percentage mentors: " + percentage[0];

  var returnArray = [message, message2];
  return returnArray;
}

var result = createMessage(15, 8);

console.log(result[0]);
console.log(result[1]);
