var students = 104;
var mentors = 56;

var total = students + mentors;

  var percentMentors = Math.floor((mentors *100)/total);

  var percentstudents = Math.floor((students *100)/total);
function message (){
    var gM = "percentage of mentors is " + percentMentors+ "%" + " and percentage of students is " + percentstudents + "%";
    return gM;
}
console.log(message());