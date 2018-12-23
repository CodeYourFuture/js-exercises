var class1Mentor = "Daniel";
var class2Mentor = "Irina";
var class3Mentor = "Mimi";
var class4Mentor = "Rob";
var class5Mentor = "Yohannes";

function mentors(names){
    return names.toUpperCase(names);
}

function classMentorGreeting(names){
    return "HELLO "+ mentors(names);

}
console.log(classMentorGreeting(class1Mentor));
console.log(classMentorGreeting(class2Mentor));
console.log(classMentorGreeting(class3Mentor));
console.log(classMentorGreeting(class4Mentor));
console.log(classMentorGreeting(class5Mentor));


