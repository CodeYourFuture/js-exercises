// - When clicking ** blue ** it should change:
//  ** Jumbotron ** background color to`#588fbd`
// - ** Donate a bike ** button background color to`#ffa500`
// ** Volunteer ** button background color to`black` and text color to`white`


let blueButton = document.querySelector("#blueBtn");
let jumbo = document.querySelector(".jumbotron");
let donate = jumbo.querySelector(".btn");
let vol = jumbo.querySelectorAll(".btn");

blueButton.addEventListener("click", () => {
    jumbo.style.backgroundColor = "#588fbd";
    donate.style.backgroundColor = "#ffa500";
    vol[1].style.backgroundColor = "#fff";
})
//-----------------------------------------//

//- When clicking **orange** it should change:
// - ** Jumbotron ** background color to`#f0ad4e`
//  - ** Donate a bike ** button background color to`#5751fd`
//  - ** Volunteer ** button background color to`#31b0d5` and text color to`white`

let orangeButton = document.querySelector("#orangeBtn");

orangeButton.addEventListener("click", () => {
    jumbo.style.backgroundColor = "#f0ad4e";
    donate.style.backgroundColor = "#5751fd";
    vol[1].style.backgroundColor = "#31b0d5";
    vol[1].style.color = "white";
})
//------------------------------//

//- When clicking **green** it should change:
// - ** Jumbotron ** background color to`#87ca8a`
//  - ** Donate a bike ** button background color to`black`
//  - ** Volunteer ** button background color to`#8c9c08`

let greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", () => {
    jumbo.style.backgroundColor = "#87ca8a";
    donate.style.backgroundColor = "#000";
    vol[1].style.backgroundColor = "#8c9c08";

})
//-----------------------------------///

//When the submit button is pressed, it should check that all the form fields are valid:
// - The ** Your name **, ** Email ** and ** Describe yourself ** fields need to be non - empty(Hint: their`value` length has to be greater than zero)
//     - For the ** Email ** field also check if it contains the`@` character


//For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click ** Submit ** it should:
// - Display an alert to thank you for filling out the form
//     - Blank out(make empty) all the text fields




let form = document.forms[0]
let submitButton = form.querySelector(".btn");

submitButton.addEventListener("click", (e) => {
    let inputEntry = form.querySelectorAll(".form-control");
    for (var i = 0; i < inputEntry.length; i++) {
        if (inputEntry[i].value === "") {
            alert("Please fill the fields")
            e.preventDefault()
        }
    } if (inputEntry[0].value.indexOf("@") === -1) {
        let emailValidity = ""
        emailValidity = "Invalid address"
        document.getElementById("emailHelp").textContent = emailValidity
        e.preventDefault()


    } else {
        alert("Thanks for submitting")
    }

})








