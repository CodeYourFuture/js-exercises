//Exercise-1

function calculatePercentage(percentFor, percentof) {
    return Math.floor((percentFor / percentof * 100));
}

function createMessage(mentNumber, StudNumber) {
    var message = 'Percentage of mentors ' + mentNumber + '%' + '\n' + 'Percentage of students ' + StudNumber + '%';
    return message;

}

function total(mentor, student) {
    return mentor + student;
}



var mentors = 8;
var student = 15;
var total = mentors + student;
var numberOfMentors, numberOfStudents, mes;
console.log('===========//Exercise-1==============');
numberOfStudents = calculatePercentage(student, total);
numberOfMentors = calculatePercentage(mentors, total);

mes = createMessage(numberOfStudents, numberOfMentors);
console.log(mes);

console.log('===========//Exercise-2==============');


//Exercise-2
function greetings() {
    return 'Hello';
}

function upperCaseNames(name) {
    return name.toUpperCase();
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greetings() + ' ' + upperCaseNames(mentor1));
console.log(greetings() + ' ' + upperCaseNames(mentor2));
console.log(greetings() + ' ' + upperCaseNames(mentor3));
console.log(greetings() + ' ' + upperCaseNames(mentor4));
console.log(greetings() + ' ' + upperCaseNames(mentor5));