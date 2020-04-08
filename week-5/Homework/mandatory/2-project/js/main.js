// // Blue button
// const jumbotronBackground = document.querySelector(".jumbotron");
// const donateAbikeButton = document.querySelector(".btn-lrg");
// const blueButton = document.querySelector("#blueBtn");
// const volunteryButton = document.querySelector(".btn-secondary");
// blueButton.addEventListener("click", changeBackgroundToBlue);

// function changeBackgroundToBlue() {
//   jumbotronBackground.style.backgroundColor = "#588fbd";
//   donateAbikeButton.style.backgroundColor = "#ffa500";
//   volunteryButton.style.backgroundColor = `black`;
//   volunteryButton.style.color = `white`;
// }

// // Orange button

// const orangeButton = document.querySelector("#orangeBtn");

// orangeButton.addEventListener("click", changeBackgroundToOrange);

// function changeBackgroundToOrange() {
//   jumbotronBackground.style.backgroundColor = `#f0ad4e`;
//   donateAbikeButton.style.backgroundColor = `#5751fd`;
//   volunteryButton.style.backgroundColor = `#31b0d5`;
//   volunteryButton.style.color = `white`;
// }
// // Green button

// const greenButton = document.querySelector("#greenBtn");
// greenButton.addEventListener("click", changeBackgroundToGreen);

// function changeBackgroundToGreen() {
//   jumbotronBackground.style.backgroundColor = `#87ca8a`;
//   donateAbikeButton.style.backgroundColor = `black`;
//   volunteryButton.style.backgroundColor = `#8c9c08`;
// }

const formBtn = document.querySelector("form button");
const inputs = document.querySelectorAll(".form-control");


formBtn.addEventListener("click", checkTheForm)

function checkTheForm(event) {
  event.preventDefault()
  inputs.forEach(input => {
    if (!input.value > 0) {
      input.style.backgroundColor = "red"
    }
  });
}

console.log("ola");