
var students = 104;
var mentors = 56;
var total = students + mentors;
var percentageOfMentors = Math.round((mentors*100)/total);
var percentageOfStudents = Math.round((students*100)/total);
function result (){ 
    var message = "percentage of mentors is " + percentageOfMentors + "% "+ " and percentage of students is " + percentageOfStudents+ "%";
return message;

}
console.log(result());

