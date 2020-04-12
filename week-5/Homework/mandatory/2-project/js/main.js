// // Blue button
const jumbotronBackground = document.querySelector(".jumbotron");
const donateAbikeButton = document.querySelector(".btn-lrg");
const blueButton = document.querySelector("#blueBtn");
const volunteryButton = document.querySelector(".btn-secondary");
blueButton.addEventListener("click", changeBackgroundToBlue);

function changeBackgroundToBlue() {
  jumbotronBackground.style.backgroundColor = "#588fbd";
  donateAbikeButton.style.backgroundColor = "#ffa500";
  volunteryButton.style.backgroundColor = `black`;
  volunteryButton.style.color = `white`;
}

// // Orange button

const orangeButton = document.querySelector("#orangeBtn");

orangeButton.addEventListener("click", changeBackgroundToOrange);

function changeBackgroundToOrange() {
  jumbotronBackground.style.backgroundColor = `#f0ad4e`;
  donateAbikeButton.style.backgroundColor = `#5751fd`;
  volunteryButton.style.backgroundColor = `#31b0d5`;
  volunteryButton.style.color = `white`;
}
// // Green button

const greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", changeBackgroundToGreen);

function changeBackgroundToGreen() {
  jumbotronBackground.style.backgroundColor = `#87ca8a`;
  donateAbikeButton.style.backgroundColor = `black`;
  volunteryButton.style.backgroundColor = `#8c9c08`;
}

// ---------------------------------------------------------

const form = document.querySelector('form')
// console.log(form.elements)
const formBtn = document.querySelector("form button");
const inputs = [...document.querySelectorAll(".form-control")]
console.log(inputs)

// const emailArea = document.querySelector("#exampleInputEmail1")
// const nameArea = document.querySelector("#example-text-input");
// const textArea = document.querySelector("#exampleTextarea")

function isInputValid(input) {
  switch (input.id) {
    case 'exampleInputEmail1':
      return input.value.length > 0 && input.value.includes("@")
    default:
      return input.value.length > 0
  }
  // if email and guy => false
  // if email and guy@ => true
  // if name and ola => true
  // TODO: implement this function
}


form.addEventListener("submit", e => {
  e.preventDefault()
  let shouldSubmitForm = true;
  inputs.map(input => {
    if (isInputValid(input)) { // check if element is ok
      input.style.backgroundColor = "white"
    } else {
      shouldSubmitForm = false
      input.style.backgroundColor = "red"
    }
  })
  if (shouldSubmitForm) {
    alert("Thank you for filling out the form!");
    form.reset();
  }
})