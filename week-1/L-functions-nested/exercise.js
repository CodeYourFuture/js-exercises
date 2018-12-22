var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


// the percentage function//
function createPercentages(sts,mts) {
var percSts = (mts/(mts+sts))* 100;
var percMts = (sts/(mts+sts))* 100;
displayPercentages(percSts,percMts);
 }

function displayPercentages(percSts,percMts){
console.log("Percentage of Students " + Math.round(percSts) + "%");
console.log("Percentage of mentors " + Math.round(percMts) + "%");
}

function displayGreetings(name){ 
    console.log("Hello " + name.toUpperCase() + "!");
}
createPercentages(8,15);
displayGreetings(mentor1);
displayGreetings(mentor2);
displayGreetings(mentor3);
displayGreetings(mentor4);
displayGreetings(mentor5);