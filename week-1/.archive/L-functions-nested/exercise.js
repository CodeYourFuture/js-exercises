const numberOfStudents = 150;
const numberOfMentors = 9;
const totalPeople = numberOfStudents + numberOfMentors;


function getPercentage(numberInGroup) {
    let percentage = Math.round(numberInGroup * 100 / totalPeople)
    return percentage
}

// console.log(studentsAndMentors(15, 8))


function createMessage(nameOfSchool) {

    const message = `At ${nameOfSchool} the are ${getPercentage(numberOfStudents)}% of the students and ${getPercentage(numberOfMentors)}% mentors`
    return message
}

console.log(createMessage("CYF"))






// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";