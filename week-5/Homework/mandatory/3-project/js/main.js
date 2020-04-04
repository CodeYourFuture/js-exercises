let jumbo = document.querySelector(`.jumbotron`);
let donate = document.querySelector(`.buttons .btn-primary`);
let volunteer = document.querySelector(`.buttons .btn-secondary`);

let jumbotoron1 = document.getElementById(`blueBtn`);
jumbotoron1.addEventListener(`click`, function() {
  jumbo.style.backgroundColor = "#588fbd";
  donate.style.backgroundColor = "#ffa500";
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
});
let jumbotoron2 = document.getElementById(`orangeBtn`);

jumbotoron2.addEventListener(`click`, function() {
  jumbo.style.backgroundColor = "#f0ad4e";
  donate.style.backgroundColor = "#5751fd";
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
});

let jumbotoron3 = document.getElementById(`greenBtn`);
jumbotoron3.addEventListener(`click`, function() {
  jumbo.style.backgroundColor = "#87ca8a";
  donate.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08";
});

// ## Part 2

let form = document.querySelector("form");
let submitbtn = form.querySelector("button");
submitbtn.setAttribute(`id`, `sub-btn`);
let submit = document.querySelector(`#sub-btn`);
let yourName = document.querySelector("#example-text-input");
let describe = document.querySelector("#exampleTextarea");
let emailInput = document.querySelector("#exampleInputEmail1");
submit.addEventListener("click", function() {
  event.preventDefault();
  if (yourName.value.length === 0) {
    yourName.style.backgroundColor = "red";
    return false;
  } else if (describe.value.length === 0) {
    describe.style.backgroundColor = "red";
    return false;
  } else if (emailInput.value.length === 0 || !emailInput.value.includes("@")) {
    emailInput.style.backgroundColor = "red";
    return false;
  } else {
    alert("Thank you for filling out the form");
    form.requestSubmit();
  }
});
