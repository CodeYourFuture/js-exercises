var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentorUppercase(mentor) {
    return mentor.toUpperCase(mentor);
}

function greeting(mentor) {
    return `HELLO ${mentorUppercase(mentor)}`;
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));


// Solution from class

// function logMentor(mentor) {
//     var mentorUpperCase = mentor.toUpperCase();
//     console.log("HELLO" + mentorUpperCase);
// }

// logMentor(mentor1);
// logMentor(mentor2);
// logMentor(mentor3);
// logMentor(mentor4);
// logMentor(mentor5);