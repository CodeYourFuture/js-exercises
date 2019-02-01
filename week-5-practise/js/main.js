/* The Blue Button*/
var blueBtn = document.querySelector("#blueBtn");

blueBtn.addEventListener("click", function() {
  document.getElementsByClassName("jumbotron")[0].style.backgroundColor =
    "#588fbd";
  document.querySelector(".buttons").firstElementChild.style.backgroundColor =
    "#ffa500";
  document.querySelector(".buttons").lastElementChild.style.backgroundColor =
    "black";
  document.querySelector(".buttons").lastElementChild.style.color = "white";
});
/* The Orange Button*/
var orangeBtn = document.querySelector("#orangeBtn");

orangeBtn.addEventListener("click", function() {
  document.getElementsByClassName("jumbotron")[0].style.backgroundColor =
    "#f0ad4e";
  document.querySelector(".buttons").firstElementChild.style.backgroundColor =
    "#5751fd";
  document.querySelector(".buttons").lastElementChild.style.backgroundColor =
    "#31b0d5";
  document.querySelector(".buttons").lastElementChild.style.color = "white";
});
/* The Green Button*/
var greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener("click", function() {
  document.getElementsByClassName("jumbotron")[0].style.backgroundColor =
    "#87ca8a";
  document.querySelector(".buttons").firstElementChild.style.backgroundColor =
    "black";
  document.querySelector(".buttons").lastElementChild.style.backgroundColor =
    "#8c9c08";
});
/*form-part2 */
var formTag = document.querySelector("form");
formTag.lastElementChild.addEventListener("click", validateForm);
function validateForm() {
  var email = document.querySelector("#exampleInputEmail1");
  var name = document.querySelector("#example.text-input");
  var description = document.querySelector("#exampleTexterea");
  event.preventDefault();

  if (email.value.length === 0) {
    email.style.backgroundColor = "red";
  } else if (name.value.length === 0) {
    name.style.backgroundColor = "red";
  } else if (description.value.lengh === 0) {
    description.style.backgroundColor = "red";
  } else if (!email.value.includes("@")) {
    email.style.backgroundColor = "red";
  }
}
