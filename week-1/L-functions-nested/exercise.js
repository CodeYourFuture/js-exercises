//Exercise-1
var st = 15;
var men = 8;
var total = st + men;

function calcPerc(num, total) {
    return Math.floor(num * 100 / total) + '%';
}

function messsage() {
    return "Percentage students: " + calcPerc(st, total) +
        '\n' + "Percentage mentors: " + calcPerc(men, total);
}

console.log(messsage());


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