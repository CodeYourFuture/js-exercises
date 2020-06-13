//settings for blue button

let blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", setColor(`#87ca8a`, `black`, `#8c9c08`));

//settings for orange button

/* let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener(
  "click",
  setColor(`#f0ad4e`, `#5751fd`, `#31b0d5`, `white`)
);
 */
//settings for green button

/* let greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener(
  "click",
  setColor("#588fbd", "#ffa500", "black", "white")
); */

function setColor(
  colorJumbotron,
  colorBtnPrimary,
  colorBtnSecondary,
  ColorFontBtnSecondary = "black"
) {
  document.querySelector(".jumbotron").style.backgroundColor = colorJumbotron;
  document.querySelector(
    ".btn.btn-primary.btn-lrg"
  ).style.backgroundColor = colorBtnPrimary;
  document.querySelector(
    ".btn.btn-secondary.btn-lrg"
  ).style.backgroundColor = colorBtnSecondary;
  document.querySelector(
    ".btn.btn-secondary.btn-lrg"
  ).style.color = ColorFontBtnSecondary;
}

//settings for submit button

let submitBtn = document.querySelector(".form-group + .btn.btn-primary");
submitBtn.addEventListener("click", submitFunc);

function submitFunc() {
  let email = document.querySelector("#exampleInputEmail1");
  let yourName = document.querySelector("#example-text-input");
  let describeYourself = document.querySelector("#exampleTextarea");

  if (
    email.value.length === 0 ||
    yourName.value.length === 0 ||
    describeYourself.value.length === 0 ||
    email.value.includes("@") === false
  ) {
    if (email.value.length === 0 || email.value.includes("@") === false) {
      email.style.backgroundColor = "red";
    }
    if (yourName.value.length === 0) {
      yourName.style.backgroundColor = "red";
    }
    if (describeYourself.value.length === 0) {
      describeYourself.style.backgroundColor = "red";
    }
    event.preventDefault();
  } else {
    alert("Thank you for filling");
    event.preventDefault();
    email.style.backgroundColor = "white";
    yourName.style.backgroundColor = "white";
    describeYourself.style.backgroundColor = "white";
    email.value = "";
    yourName.value = "";
    describeYourself.value = "";
  }
}

/* 
- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
 */
