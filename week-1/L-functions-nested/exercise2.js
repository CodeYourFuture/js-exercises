var mentor1 = 'Daniel';
var mentor2 = 'Irina';
var mentor3 = 'Mimi';
var mentor4 = 'Rob';
var mentor5 = 'Yohannes';

var name = mentor1,
	mentor2,
	mentor3,
	mentor4,
	mentor5;
function upperCase(name) {
	return name.toUpperCase();
}

function greeting(name) {
	return 'Hello ' + name;
}
console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));
