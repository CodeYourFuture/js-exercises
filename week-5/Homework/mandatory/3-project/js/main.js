document.querySelector("#blueBtn").addEventListener("click", function () {
  document.getElementsByClassName("jumbotron")[0].style.background = "#588fbd";
  document.querySelector(".buttons").children[0].style.background = "#ffa500";
  document.querySelector(".buttons").children[1].style.background = "black";
  document.querySelector(".buttons").children[1].style.color = "white";
});

document.querySelector("#orangeBtn").addEventListener("click", function () {
  document.getElementsByClassName("jumbotron")[0].style.background = "#f0ad4e";
  document.querySelector(".buttons").children[0].style.background = "#5751fd";
  document.querySelector(".buttons").children[1].style.background = "#31b0d5";
  document.querySelector(".buttons").children[1].style.color = "white";
});

document.querySelector("#greenBtn").addEventListener("click", function () {
  document.getElementsByClassName("jumbotron")[0].style.background = "#87ca8a";
  document.querySelector(".buttons").children[0].style.background = "black";
  document.querySelector(".buttons").children[1].style.background = "#8c9c08";
  console.log("hello");
});

function validationEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateText(inputtext) {
  if (inputtext.length == 0) {
    return false;
  } else {
    return true;
  }
}

let submitStatus = false;

function formValidate() {
  let txtEmail = document.querySelector("#exampleInputEmail1");
  let txtName = document.querySelector("#example-text-input");
  let txtDescribe = document.querySelector("#exampleTextarea");

  /*
  document.querySelector("#submit_btn").addEventListener("click", function(event) {
    event.preventDefault();
}, false);
*/

  if (validationEmail(txtEmail.value) == false) {
    txtEmail.style.background = "#ffbbbb";
  } else {
    txtEmail.style.background = "";
    submitStatus = true;
  }

  if (validateText(txtName.value) == false) {
    txtName.style.background = "#ffbbbb";
  } else {
    txtName.style.background = "";
  }

  if (validateText(txtDescribe.value) == false) {
    txtDescribe.style.background = "#ffbbbb";
  } else {
    txtDescribe.style.background = "";
  }

  if (submitStatus == true) {
    alert("thank you for filling out the form");
  }

  return submitStatus;
}
