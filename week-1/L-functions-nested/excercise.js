function createMessage(percentOf, percentage) {
  var printMsg = "Percentage of " + percentOf + ": " + percentage + "%";
  console.log(printMsg);
}

function percentage(value1, value2) {
  var percentageCalculated = Math.round((value1 / (value1 + value2)) * 100);
  return percentageCalculated;
}

createMessage("Students", percentage(15, 8));
createMessage("Mentors", percentage(8, 15));
