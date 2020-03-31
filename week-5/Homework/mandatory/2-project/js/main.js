//When clicking ** blue ** it should change:
    // - ** Jumbotron ** background color to`#588fbd`
    //- ** Donate a bike ** button background color to`#ffa500`
    //- ** Volunteer ** button background color to`black` and text color to`white`*/


let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", function() {
    document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
    document.querySelector(".btn btn-primary btn-lrg").style.backgroundColor = "#F0AD4E";
    white.querySelector("btn btn-secondary btn-lrg").backgroundColor = "#000000";
});





// let alertButton = document.querySelector("#alertBtn");
// alertButton.addEventListener("click", function () {
//     alert("Thank you for visiting Bikes for Refugees!");
// });
