var numberOfStudents = 15;
var numberOfMentors = 8;
var nbr = 0;
var sum = numberOfMentors + numberOfStudents ;

function round (nbr, sum){
    return Math.round( ( nbr * 100) / sum);
}

console.log("Percentage of students: " + round(numberOfStudents, sum) + "%" );
console.log("Percentage of mentors: " + round(numberOfMentors, sum) +"%");

