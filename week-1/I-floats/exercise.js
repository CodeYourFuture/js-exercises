var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = 23

var studentPercentage = (numberOfStudents / totalNumber) * 100
var mentorPercentage = (numberOfMentors / totalNumber) * 100
var exactStudentper = Math.round(studentPercentage)
var exactMentorPer = Math.round(mentorPercentage)

console.log('Percentage Students: ' + exactStudentper + '%')
console.log('Percentage Mentors: ' + exactMentorPer + '%')
