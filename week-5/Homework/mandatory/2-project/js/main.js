// ### Part 1
// - When clicking ** blue ** it should change:
    // - ** Jumbotron ** background color to`#588fbd`
    //- ** Donate a bike ** button background color to`#ffa500`
    //- ** Volunteer ** button background color to`black` and text color to`white`*/


let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", function() {
    document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
    document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "#ffa500";
    let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
    volunteerButton.style.backgroundColor= "#000000";
    volunteerButton.style.color = "#ffffff";
}); 
 
// - When clicking ** orange ** it should change:
    // - ** Jumbotron ** background color to`#f0ad4e`
    // - ** Donate a bike ** button background color to`#5751fd`
    // - ** Volunteer ** button background color to`#31b0d5` and text color to`white`

let orangeButton = document.querySelector("#orangeBtn");
    orangeButton.addEventListener("click", function() {
        document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
        document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColour = "#5751fd";
        let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");
        volunteerBtn.style.backgroundColor = "#31b0d5";
        volunteerBtn.style.color = "#ffffff"; 
    });


// - When clicking ** green ** it should change:
    // - ** Jumbotron ** background color to`#87ca8a`
    // - ** Donate a bike ** button background color to`black`
    // - ** Volunteer ** button background color to`#8c9c08`

let greenButton = document.querySelector("#greenBtn");
    greenButton.addEventListener("click", function() {
        document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
        document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "#000000";
        document.querySelector(".btn.btn-secondary.btn-lrg").style.backgroundColor = "#8c9c08";
    });



// ### Part 2

// Just below the buttons, there's a form called **Register with us**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:
// - The ** Your name **, ** Email ** and ** Describe yourself ** fields need to be non - empty(Hint: their`value` length has to be greater than zero)
//     - For the ** Email ** field also check if it contains the`@` character

// For all the fields that invalid, it should make their background color`red`.
// IF all the fields are valid, when you click ** Submit ** it should:
// - Display an alert to thank you for filling out the form
//     - Blank out(make empty) all the text fields

//         ** Important hint:** In your function that handles clicks on the`Submit` button you will need to call`event.preventDefault()` to stop the browser from refreshing the page.To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault 



let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", function () {
    alert("Thank you for visiting Bikes for Refugees!");
});
