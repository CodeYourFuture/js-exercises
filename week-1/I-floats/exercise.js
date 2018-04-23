var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
console.log("\n**************details***************************");
console.log("number of students:", numberOfStudents);
console.log("number of mentors:", numberOfMentors);
console.log("\n**************Percentages***************************");
console.log("Percentage students:", Math.round(numberOfStudents/total*100)+'\%');
console.log(
  "Percentage mentors:",
  Math.round(numberOfMentors / total * 100) + "%"
);
//
console.log("*****More Math functions*****");
console.log('Round down',Math.ceil(4.2));
console.log("Round up", Math.floor(4.2));
let rand_num = Math.random();
console.log('Random numbers between 0 and 1:',rand_num);
rand_num = Math.round(Math.random()*100);
console.log("Random numbers between 0 and 100:", rand_num);
//
console.log("Power:", Math.pow(2,3));
console.log("Trig:", Math.sin(90 * Math.PI / 180));