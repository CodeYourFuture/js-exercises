// ############### Part One #################
// ========= Elements to be manipulated =========
let jumptron  = document.querySelector(".jumbotron");
let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let dntBtn = document.getElementsByClassName("btn-lrg")[0];
let vlnBtn = document.getElementsByClassName("btn-lrg")[1];

// =========== Styling Event Handlers ===========
blueBtn.addEventListener("click", function () {
    jumptron.style.backgroundColor = "#588fbd";
    dntBtn.style.backgroundColor = "#ffa500";
    vlnBtn.style.backgroundColor = "black";
    vlnBtn.style.color = "white";
})

orangeBtn.addEventListener("click", function () {
    jumptron.style.backgroundColor = "#f0ad4e";
    dntBtn.style.backgroundColor = "#5751fd";
    vlnBtn.style.backgroundColor = "#31b0d5";
    vlnBtn.style.color = "white";
})

greenBtn.addEventListener("click", function () {
    jumptron.style.backgroundColor = "#87ca8a";
    dntBtn.style.backgroundColor = "black";
    vlnBtn.style.backgroundColor = "#8c9c08";
})

// ############ Part Two ###############
// =========== Form Elements ===========
let email = document.getElementById("exampleInputEmail1");
let name = document.getElementById("example-text-input");
let textarea = document.getElementById("exampleTextarea");
let submitBtn = document.querySelector("form > button");

submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (email.value.length <= 0) {
            email.style.border = "2px solid red";
        } else if (!(email.value.includes("@"))) {
            email.style.border = "2px solid red";
        }else if (name.value.length <= 0 ) {
            name.style.border = "2px solid red";
        } else if (textarea.value.length <= 0) {
            textarea.style.border = "2px solid red";
            textarea.placeholder = "Enter some Text";
        } else {
            alert ("Thank you for filling out this form")
            document.getElementsByTagName("form")[0].reset();
        }

})