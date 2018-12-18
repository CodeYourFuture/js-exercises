function createMessage(message) {
    console.log(message);
}
function percentage(students, mentors) {
    var percentageOfStudents = Math.round(students / (students + mentors) * 100);
    var printMsg = "Percentage of Students = " + percentageOfStudents + "%";
    createMessage(printMsg);
    var percentageOfMentors = Math.round(mentors / (students + mentors) * 100);
    printMsg = "Percentage of Mentors = " + percentageOfMentors + "%";
    createMessage(printMsg);
}

percentage(15, 8);

