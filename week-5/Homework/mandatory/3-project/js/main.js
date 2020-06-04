// The Blue Button
var clickerBlueButton = document.getElementById("blueBtn");

var onBlueButtonClick = function() {
    var jumbortonDiv = document.querySelector(".jumbotron");
    jumbortonDiv.style.backgroundColor = `#588fbd`;
    var donateButt = document.getElementsByTagName("a");
    for (var i = 0; i < donateButt.length; i++) {
        if (donateButt[i].innerHTML == "Donate a bike today")
            donateButt[i].style.backgroundColor = `#ffa500`
        else if (donateButt[i].innerHTML == "Volunteer") {
            donateButt[i].style.backgroundColor = `black`
            donateButt[i].style.color = `white`
        }
    };
}
clickerBlueButton.addEventListener("click", onBlueButtonClick);

// The Orange Button

var clickerOrangeButton = document.getElementById("orangeBtn");

var onOrangeButtonClick = function() {
    var jumbortonDiv = document.querySelector(".jumbotron");
    jumbortonDiv.style.backgroundColor = `#f0ad4e`;
    var donateButt = document.getElementsByTagName("a");
    for (var i = 0; i < donateButt.length; i++) {
        if (donateButt[i].innerHTML == "Donate a bike today")
            donateButt[i].style.backgroundColor = `#5751fd`
        else if (donateButt[i].innerHTML == "Volunteer") {
            donateButt[i].style.backgroundColor = `#31b0d5`
            donateButt[i].style.color = `white`
        }
    };
}
clickerOrangeButton.addEventListener("click", onOrangeButtonClick);

// The Green Button

var clickerGreenButton = document.getElementById("greenBtn");

var onGreenButtonClick = function() {
    var jumbortonDiv = document.querySelector(".jumbotron");
    jumbortonDiv.style.backgroundColor = `#87ca8a`;
    var donateButt = document.getElementsByTagName("a");
    for (var i = 0; i < donateButt.length; i++) {
        if (donateButt[i].innerHTML == "Donate a bike today")
            donateButt[i].style.backgroundColor = `black`
        else if (donateButt[i].innerHTML == "Volunteer") {
            donateButt[i].style.backgroundColor = `#8c9c08`
            donateButt[i].style.color = `white`
        }
    };
}
clickerGreenButton.addEventListener("click", onGreenButtonClick);

//Task2
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++)
    if (buttons[i].innerHTML == "Submit")
        var button = buttons[i];

    // Step 2: Define the event listener function

var onButtonClick = function() {

    var email = document.getElementById("exampleInputEmail1");
    var name = document.getElementById("example-text-input");
    var description = document.getElementById("exampleTextarea");


    if ((email.value.length > 0) && (email.value.includes("@")))
        if (name.value.length > 0)
            if (description.value.length > 0) {
                console.log("hellooooooo")
                alert("thank you for filling out the form");

                email.value = "";
                name.value = "";
                description.value = "";
            } else description.style.backgroundColor = "red"
    else
        name.style.backgroundColor = "red"
    else
        email.style.backgroundColor = "red"

    event.preventDefault();



};
// Step 3: Attach event listener to element
button.addEventListener("click", onButtonClick, false);