var numberOfStudents = 15;
var numberOfMentors = 8;

function CalculatePercentage(a, b){
    return Math.round(a * 100 / (a + b));
}

function message1() { 
    return console.log("Percentage students: " + CalculatePercentage (numberOfStudents, numberOfMentors) + "%");
}

function message2() {
    return console.log("Percentage mentors: " + CalculatePercentage (numberOfMentors, numberOfStudents) + "%");
}

console.log(message1());
message2 ()

