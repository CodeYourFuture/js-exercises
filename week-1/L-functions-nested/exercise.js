var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function getAgeInDays(age) {
    return age * 365;
}

function createCreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
        "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
}
var result = createCreeting("Awel", 28);

console.log(result);