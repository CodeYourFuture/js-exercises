var numberOfStudents = 15;
var numberOfMentors = 8;

var sum = numberOfMentors + numberOfStudents ;

function percentageOfMembers (nbr, sum){
    return Math.round( ( nbr * 100) / sum);
}

console.log("Percentage of students: " + percentageOfMembers(numberOfStudents, sum) + "%" );
console.log("Percentage of mentors: " + percentageOfMembers(numberOfMentors, sum) +"%");

