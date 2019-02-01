/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
////////////METHOD 1//////
// var bgrChangeBtn = document.querySelector("#bgrChangeBtn");
// bgrChangeBtn.addEventListener("click", changeBackground);

// function changeBackground() {
//     document.body.style.backgroundColor = "red";

// }

//////////METHOD 2: CREATING AN ARRAY WITH THE CHILDREN OF THE DIV//////////
var divButtonChild = document.querySelector(".buttons").children;
//console.log(divButtonChild);
divButtonChild[0].addEventListener("click", changeBackground);

function changeBackground() {
    document.body.style.backgroundColor = "red";

}


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
///////////METHOD 1////////////
// var alertBtn = document.querySelector("#alertBtn");
// alertBtn.addEventListener("click", alertMessage);

// function alertMessage() {
//     alert("Red light");
//     alertBtn.style.backgroundColor = "red";
// }

/////////////METHOD 2///////////////
divButtonChild[1].addEventListener("click", alertMessage);

function alertMessage() {
    alert("Red light");
    alertBtn.style.backgroundColor = "red";
}


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
// var addTextBtn = document.querySelector("#addTextBtn");
// addTextBtn.addEventListener("click", addText);

////////////METHOD 2//////////
divButtonChild[2].addEventListener("click", addText);

function addText() {
    var paragraph = document.createElement('p'); // here we're just creating it, element is not visible yet
    addTextBtn.appendChild(paragraph);
    paragraph.innerText = "Read me below.";
    addTextBtn.removeEventListener("click", addText); // to stop at one paragraph
    addTextBtn.style.backgroundColor = "Yellow"; //Just an extra
}


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
//////////METHOD 1///////////
// var largerLinksBtn = document.querySelector("#largerLinksBtn");
// largerLinksBtn.addEventListener("click", largeLinks);

// function largeLinks() {
//     var large = document.querySelectorAll(".btn-lrg");
//     large.forEach(function (element) {
//         if (element.style.fontSize == "xx-large") {
//             element.style.fontSize = "medium";

//         } else {
//             element.style.fontSize = "xx-large";
//         }
//     });

// }

//////////METHOD 2////////////

divButtonChild[3].addEventListener("click", largeLinks);

function largeLinks() {
    var large = document.querySelectorAll(".btn-lrg");
    large.forEach(function (element) {
        if (element.style.fontSize == "xx-large") {
            element.style.fontSize = "medium";

        } else {
            element.style.fontSize = "xx-large";
        }
    });

}