//Part one
let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");
let jumBotron = document.querySelector("div.jumbotron");
let bikeBox = document.querySelector("a.btn.btn-primary.btn-lrg");
let volunteerButton = document.querySelector("a.btn.btn-secondary.btn-lrg");
function changeTheme() {
  return (
    (jumBotron.style.backgroundColor = "#588fbd"),
    (bikeBox.style.backgroundColor = `#ffa500`),
    (volunteerButton.style.backgroundColor = "#000000"),
    (volunteerButton.style.color = "#FFFFFF")
  );
}

const newTheme = () => {
  return (
    (jumBotron.style.backgroundColor = `#f0ad4e`),
    (bikeBox.style.backgroundColor = `#5751fd`),
    (volunteerButton.style.backgroundColor = `#31b0d5`),
    (volunteerButton.style.color = "#FFFFFF")
  );
};

const greenTheme = () => {
  return (
    (jumBotron.style.backgroundColor = `#87ca8a`),
    (bikeBox.style.backgroundColor = "#000000"),
    (volunteerButton.style.backgroundColor = "`#8c9c08`")
  );
};
blueButton.addEventListener("click", changeTheme);
orangeButton.addEventListener("click", newTheme);
greenButton.addEventListener("click", greenTheme);

//Part Two;

// let field = document.querySelectorAll(".form-control");
// console.log(field);
let emailField = document.getElementById("exampleInputEmail1");
console.log(emailField);
let textInput = document.getElementById("example-text-input");
console.log(textInput);
let textArea = document.getElementById("exampleTextarea");
console.log(textArea);
let submitButton = document.querySelectorAll("button");
let targetButton;
for (let i = 0; i < submitButton.length; i++) {
  if (submitButton[i].innerHTML === "Submit") {
    targetButton = submitButton[i];
  }
}
console.log(submitButton);
console.log(targetButton);
// console.log(emailField.values.length);
// console.log(field.values.length);
function responseToClick() {
  if (
    textInput.value.length > 0 &&
    emailField.value.includes("@") &&
    emailField.value.length > 0 &&
    textArea.value.length > 0
  ) {
    alert("Thank you for filling out the form");
  } else {
    return (emailField.style.backgroundColor = "red");
  }
}

targetButton.addEventListener("click", responseToClick);
