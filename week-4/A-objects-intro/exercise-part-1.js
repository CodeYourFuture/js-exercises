/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable

*/

var Liverpool = {
  weather: 15,
  population: 1500000,
  location: "UK"
};

var week = {
  weekdays: ["Monday", "Tuesday", "Wednesday"],
  weekends: ["Saturday", "Sunday"]
};

var tickets = {
  zone1: 299,
  zone2: 199,
  discountEarlyBirds: 20
};

var meeting = {
  people: ["Mariya", "Elena"],
  date: "01.12.2018",
  where: "Manchester"
};

var date = {
  day: 01,
  month: 12,
  year: 2018
};
var dateToday = Object.values(date);
console.log(dateToday);
