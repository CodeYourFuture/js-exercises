
let message = function() {  
  console.log("This message is shown after 7 seconds");
}

setTimeout(message, 7000);

// /* 
// Part 1
// */
// /*Solution 1*/
// // An array of objects for the selectors of the buttons and colors as similar changes are happening during each event
// let configs = [
//     { id: "#blueBtn", colors: ["#588fbd", "#ffa500", "black", "white"] },
//     { id: "#orangeBtn", colors: ["#f0ad4e", "#5751fd", "#31b0d5", "white"] },
//     { id: "#greenBtn", colors: ["#87ca8a", "black", "#8c9c08", "white"] },
//   ];
  
  
//   // this function applies the style or theme of colors when a click event takes place
//   function changeTheme(color1, color2, color3, color4) {
//     document.querySelector(".jumbotron").style.backgroundColor = color1;
//     document.querySelector(
//       ".buttons .btn-primary"
//     ).style.backgroundColor = color2;
//     let volunteerButton = document.querySelector(".btn-secondary");
//     volunteerButton.style.backgroundColor = color3;
//     volunteerButton.style.color = color4;
//   }
//   // this function selects the selector of the button and asks another function to apply the change of style
//   function registerButtonToChangeTheme(buttonId, arrayOfColors) {
//     document
//       .querySelector(buttonId)
//       .addEventListener("click",
//         // Arguments to "changeTheme" function are passed on by using the so-called "spread syntax" (three dots operator),
//         // it takes the same effect as if you passed them one by one 
//         // E.g.: changeTheme(arrayOfColors[0], arrayOfColors[1], arrayOfColors[2], arrayOfColors[3])
//         // See for more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//         () => changeTheme(...arrayOfColors));
//     //if you don't want you to use spread syntax you can pass it like changeTheme(arrayOfColors) and change the method to
//     /*
    
//     function changeTheme(colors) {
//     document.querySelector(".jumbotron").style.backgroundColor = color[0];
//     document.querySelector(
//       ".buttons .btn-primary"
//     ).style.backgroundColor = color[1];
//     let volunteerButton = document.querySelector(".btn-secondary");
//     volunteerButton.style.backgroundColor = color[2];
//     volunteerButton.style.color = color[3];
//   }*/
//   }
  
//   configs.forEach((config) =>
//     registerButtonToChangeTheme(config.id, config.colors)
//   );
  
  
  
//   /*solution 3*/
//   let blueButton = document.getElementById("blueBtn");
//   // blueButton.addEventListener("click", blueMaker);
//   // function blueMaker() {
//   //   document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
//   //   document.querySelector(".buttons > a").style.backgroundColor = "#ffa500";
//   //   volBtn = document.querySelector(".buttons a:last-child");
//   //   volBtn.style.backgroundColor = "black";
//   //   volBtn.style.color = "white";
//   // }
  
//   // let orangeButton = document.getElementById("orangeBtn");
//   // orangeButton.addEventListener("click", orangeMaker);
  
//   // function orangeMaker() {
//   //   document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
//   //   document.querySelector(".buttons > a").style.backgroundColor = "#5751fd";
//   //   volBtn = document.querySelector(".buttons a:last-child");
//   //   volBtn.style.backgroundColor = "#31b0d5";
//   //   volBtn.style.color = "white";
//   // }
  
//   // let greenButton = document.getElementById("greenBtn");
//   // greenButton.addEventListener("click", greenMaker);
  
//   // function greenMaker() {
//   //   document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
//   //   document.querySelector(".buttons > a").style.backgroundColor = "black";
//   //   volBtn = document.querySelector(".buttons a:last-child");
//   //   volBtn.style.backgroundColor = "#8c9c08";
//   // }
//   /* 
//     Part 2
//   */
  
//   let nameField = document.querySelector("#example-text-input");
//   let emailField = document.querySelector("#exampleInputEmail1");
//   let describeYourselfField = document.querySelector("#exampleTextarea");
//   let submitButton = document.querySelector("button[type='submit']");
//   let allFields = [nameField, emailField, describeYourselfField];
  
//   // Validates whether the fields are empty or not and changes the style depending on the validation
  
//   //added green as a color for valid, but you can keep it only show red or nothing
//   function validateFieldsEmptiness(element) {
//     if (element.value.length > 0) {
//       element.style.background = "green";
//     } else {
//       element.style.background = "red";
//     }
//   }
  
//   // Validates if the email contains "@" symbol
//   function validateEmailField() {
//     if (!emailField.value.includes("@")) {
//       emailField.style.background = "red";
//     }
//   }
  
//   submitButton.addEventListener("click", () => {
//     event.preventDefault();
  
//     allFields.forEach(validateFieldsEmptiness);
//     validateEmailField();
//     // Checks if all inputs are valid then reset the fields and alert a message.
//     if (
//       allFields.every((element) => element.style.background.includes("green"))
//     ) {
//       allFields.forEach((element) => {
//         element.style.background = "white";
//         element.value = "";
//       });
//       alert("Thank you for filling out the form");
//     }
//   });
  
//   /*solution 2/
  
//   const form = document.getElementsByTagName("form");
//   // const formControl = document.querySelectorAll(".form-control");
//   // const submitBtn = document.querySelector("form button");
  
//   // function submitForm(e) {
//   //   e.preventDefault();
//   //   formControl.forEach((element) => {
//   //     if (element.value.length > 0) {
//   //       element.style.background = "green";
//   //       if (element.type === "email" && !element.value.includes("@")) {
//   //         element.style.background = "red";
//   //       }
//   //     } else {
//   //       element.style.background = "red";
//   //     }
//   //   });
  
//   //   if (
//   //     formControl.every((element) => element.style.background.includes("green"))
//   //   ) {
//   //     formControl.forEach((element) => {
//   //       element.value = "";
//   //       element.style.background = "white";
//   //     });
//   //     alert("Thank you for filling out the form");
//   //   }
//   // }
  
//   // submitBtn.addEventListener("click", submitForm);