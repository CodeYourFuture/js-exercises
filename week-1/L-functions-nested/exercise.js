var mentors= 5;
var students= 18;
 function katsayi(mentors, students) {
     var katsayi= 100/(mentors+students);
     return katsayi;
 }
 var yuzdementors= Math.round(katsayi(5,18)*mentors)
 var yuzdestudents= Math.round(katsayi(5,18)*students)
console.log("Percentage mentors: "+yuzdementors)
console.log("Percentage students: "+yuzdestudents)

