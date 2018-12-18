function createPercentages(ments, studs, totalnum = 23) {
  var permen = (ments / totalnum) * 100;
  var perstu = (studs / totalnum) * 100;
  permen = permen.toFixed(0)
  perstu = perstu.toFixed(0)
  return [permen, perstu]
}

function displayPercentages(ments, studs, totalnum = 23) {
  var getpercents = createPercentages(ments, studs, totalnum)
  var message = 'Percentage Students: ' + getpercents[0] + '%' + '\nPercentage Mentors: ' + getpercents[1] + '%';
  return message
}
console.log(displayPercentages(8, 15))
