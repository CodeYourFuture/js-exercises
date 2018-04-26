
function percentage(numberOfStudents, numberOfMentors){

// let roughStudents = Math.round(numberOfStudents);
// let roughMentors = Math.round(numberOfMentors);
let total = numberOfStudents + numberOfMentors;
let studentsFraction = Math.round(numberOfStudents / total * 100);
let mentorsFraction = Math.round(numberOfMentors / total * 100);

return result = "Students roughly are: " +studentsFraction+ "%   and Mentors roughly are:  " +mentorsFraction+ "%" ;
}
console.log("--------------------------------------");
console.log(percentage(15,8));

console.log("--------------------------------------");


var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greetingMentors(name){
    var  greeting = "hello";
    message = greeting.toUpperCase()+" "+name.toUpperCase();
    return message;
}
console.log(greetingMentors(mentor1));
console.log(greetingMentors(mentor2));
console.log(greetingMentors(mentor3));
console.log(greetingMentors(mentor4));
console.log(greetingMentors(mentor5));
