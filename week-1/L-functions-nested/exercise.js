var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentorGreeting(m1, m2, m3, m4, m5) {
    return `HELLO ${m1.toUpperCase()} \nHELLO ${m2.toUpperCase()} \nHELLO ${m3.toUpperCase()} \nHELLO ${m4.toUpperCase()} \nHELLO ${m5.toUpperCase()}`;
}

console.log(mentorGreeting(mentor1, mentor2, mentor3, mentor4, mentor5));