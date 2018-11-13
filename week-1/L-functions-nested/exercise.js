var mentor1 = 'Daniel';
var mentor2 = 'Irina';
var mentor3 = 'Mimi';
var mentor4 = 'Rob';
var mentor5 = 'Yohannes';

function makeUpper(person) {
	return person.toUpperCase();
}
function sayHello(person) {
	return 'Hello' + makeUpper(person);
}

console.log(sayHello(mentor1));
console.log(sayHello(mentor2));
console.log(sayHello(mentor3));
console.log(sayHello(mentor2));
console.log(sayHello(mentor3));

var stud1 = 'Daniel';
var stud2 = 'Irina';
var stud3 = 'Mimi';
var stud4 = 'Rob';
var stud5 = 'Yohannes';

function makeUpper(person) {
	return person.toUpperCase();
}
function sayHello(person) {
	return 'Hello' + makeUpper(person);
}

console.log(sayHello(stud1));
console.log(sayHello(stud2));
console.log(sayHello(stud3));
console.log(sayHello(stud2));
console.log(sayHello(stud3));

var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfMentors + numberOfStudents;

var perOfStudents = numberOfStudents / sum * 100;
var raund = Math.round(perOfStudents);
var perOfMentors = numberOfMentors / sum * 100;
var raund2 = Math.round(perOfMentors);
console.log('Percentage students: ' + raund + '%');
console.log('Percentage mentors: ' + raund2 + '%');
