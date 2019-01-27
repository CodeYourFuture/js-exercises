//  ### Part 1

// Blue Click

var blueButton = document.querySelector("#blueBtn");

var jumbo = document.querySelector(".jumbotron");
var bike = document.querySelector(".jumbotron .btn-primary");
console.log(bike);
var volunteer = document.querySelector(".jumbotron .btn-secondary");

blueButton.addEventListener("click", changeBlue);
function changeBlue() {
  jumbo.style.backgroundColor = `#588fbd`;
  bike.style.backgroundColor = `#ffa500`;
  volunteer.style.backgroundColor = `black`;
  volunteer.style.color = `white`;
}

//------------------------------------

// Orange click

var orangeButton = document.querySelector("#orangeBtn");

var jumbo = document.querySelector(".jumbotron");
var bike = document.querySelector(".jumbotron .btn-primary");
console.log(bike);
var volunteer = document.querySelector(".jumbotron .btn-secondary");

orangeButton.addEventListener("click", changeOrange);
function changeOrange() {
  jumbo.style.backgroundColor = `#f0ad4e`;
  bike.style.backgroundColor = `#5751fd`;
  volunteer.style.backgroundColor = `#31b0d5`;
  volunteer.style.color = `white`;
}

//------------------------------------

// Green Click

var greenButton = document.querySelector("#greenBtn");

var jumbo = document.querySelector(".jumbotron");
var bike = document.querySelector(".jumbotron .btn-primary");
console.log(bike);
var volunteer = document.querySelector(".jumbotron .btn-secondary");

greenButton.addEventListener("click", changeGreen);
function changeGreen() {
  jumbo.style.backgroundColor = `#87ca8a`;
  bike.style.backgroundColor = `black`;
  volunteer.style.backgroundColor = `#8c9c08`;
}

// End of Part 1

// ### Part 2 */
