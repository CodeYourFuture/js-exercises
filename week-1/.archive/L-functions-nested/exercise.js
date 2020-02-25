function studentsAndMentors(numberOfStudents, numberOfMentors) {
    let studentsInProcent = Math.round(numberOfStudents * 100 / 23)
    let mentorsInProcent = Math.round(numberOfMentors * 100 / 23)
    return [studentsInProcent, mentorsInProcent]
}

// console.log(studentsAndMentors(15, 8))


function createMessage(nameOfSchool) {
    const message = `At ${nameOfSchool} the are ${studentsAndMentors(15,null)[0]}% of the students and ${studentsAndMentors(null,8)[1]} %`
    return message
}

console.log(createMessage("CYF"))






// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";