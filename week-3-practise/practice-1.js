//Group J exercises for @Madiha 
//Exercise 1: BUS SCHEDULE
//Joan takes the Bus W14 every week. After missing it lately he decided to create his own schedule to catch it.
//He arrives at the bus stop everyday at the same hour 7am.
//Write a program that tell him when he misses the bus during the week.

var days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
var openHours = [7, 4, 6, 8, 5, 9, 10];  // AM
var joanAtTheBusStop = 7;
var missedDays=[];
for (i=0; i<(openHours.length-1);i++){
    if (openHours[i] < 7) {
     missedDays.push(days[i]);
     
    }
}
console.log(missedDays);
//expected result
//["Tues","Wed","Fri"]