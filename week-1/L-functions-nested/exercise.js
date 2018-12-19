var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// exercise 1
function percentage(numberOfStudents, numberOfMentors){
    var totalPeople = numberOfStudents + numberOfMentors;
    var percentageStudents = (numberOfStudents / totalPeople) * 100;
    var percentageMentors = (numberOfMentors / totalPeople) * 100;
    percentageFinal (percentageStudents, percentageMentors);
}
function percentageFinal (percentageStudents, percentageMentors) {
    console.log("Percentage students: " + Math.round(percentageStudents) + "%");
    console.log("Percentage mentors: " + Math.round(percentageMentors) + "%");
}
// exercise 2
function printShoutyGreeting (name) {
    console.log("Hello " + name.toUpperCase());
}

percentage(20,11)
printShoutyGreeting("Daniel");
printShoutyGreeting("Irina");
printShoutyGreeting("Mimi");
printShoutyGreeting("Rob");
printShoutyGreeting("Yohannes");