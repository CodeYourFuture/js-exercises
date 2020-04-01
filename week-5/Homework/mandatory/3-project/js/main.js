function addClass() {
  let divEl1 = document.querySelector(".buttons").childNodes[1];
  divEl1.classList.add("mystyle");
  let divEl3 = document.querySelector(".buttons").childNodes[3];
  divEl3.classList.add("mystyle2");
}
//BLUE BUTTON
let blueBtnEl = document.getElementById("blueBtn");
let changeColor = function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  addClass();
  let changeBtnCol = document.querySelector(".mystyle");
  changeBtnCol.style.backgroundColor = "#ffa500";
  let changeBtnCol2 = document.querySelector(".mystyle2");
  changeBtnCol2.style.backgroundColor = "black";
  changeBtnCol2.style.color = "white";
};
blueBtnEl.addEventListener("click", changeColor);

//ORANGE BUTTON
let orangeBtnEl = document.getElementById("orangeBtn");
let changeColorOrange = function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  addClass();
  let changeBtnOCol = document.querySelector(".mystyle");
  changeBtnOCol.style.backgroundColor = "#5751fd";
  let changeBtnOCol2 = document.querySelector(".mystyle2");
  changeBtnOCol2.style.backgroundColor = "#31b0d5";
  changeBtnOCol2.style.color = "white";
};
orangeBtnEl.addEventListener("click", changeColorOrange);

//GREEN BUTTON
let greenBtnEl = document.getElementById("greenBtn");
let changeColorGreen = function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  addClass();
  let changeBtnOCol = document.querySelector(".mystyle");
  changeBtnOCol.style.backgroundColor = "black";
  let changeBtnOCol2 = document.querySelector(".mystyle2");
  changeBtnOCol2.style.backgroundColor = "#8c9c08";
  changeBtnOCol2.style.color = "white";
};
greenBtnEl.addEventListener("click", changeColorGreen);

//Part 2. Register
let atRegx =/[@]/; 
let setId = document.querySelector("form button");
setId.setAttribute("id", "submit");
let submitEl = document.querySelector("#submit");
submitEl.addEventListener("click", function(e) {
  e.preventDefault();
  let getEmailValue = document.querySelector("#exampleInputEmail1").value;
  let getPersonNameValue = document.querySelector("#example-text-input").value;
  let getDescibeValue = document.querySelector("#exampleTextarea").value;
  let tst = atRegx.test(getEmailValue);
  console.log(tst);
  console.log(getEmailValue.length);
  if (getEmailValue.length <= 0) {
    let getEmailCol = document.querySelector(".form-control");
    getEmailCol.style.backgroundColor = "red";
     if(getPersonNameValue.length <= 0){
      let getNameCol = document.querySelector("#example-text-input");
      getNameCol.style.backgroundColor = "red";
       if(getDescibeValue.length <= 0){
         let getDesCol = document.querySelector("#exampleTextarea");
         getDesCol.style.backgroundColor = "red";
       }
      }
  }else{
    document.querySelector("form").reset();
    alert("Thank you for filling out the form.")
  }
});

