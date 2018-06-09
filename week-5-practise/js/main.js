document.querySelector("#blueBtn").addEventListener("click", function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector("#donate").style.backgroundColor = "#ffa500";
  document.querySelector("#volunteer").style.backgroundColor = "#000";
  document.querySelector("#volunteer").style.color = "#fff";
});

document.querySelector("#orangeBtn").addEventListener("click", function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector("#donate").style.backgroundColor = "#5751fd";
  document.querySelector("#volunteer").style.backgroundColor = "#31b0d5";
  document.querySelector("#volunteer").style.color = "#fff";
});
document.querySelector("#greenBtn").addEventListener("click", function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector("#donate").style.backgroundColor = "#000";
  document.querySelector("#volunteer").style.backgroundColor = "8c9c08";
});
/* validate customer register */
function ValidateRegisterForm() {
  event.preventDefault();

  // validate  name
  var val_name = document.getElementById("example-text-input").value;
  if (val_name == null || val_name == "" || !val_name.match(/^[\w ]+$/)) {
    document.getElementById("example-text-input").style.backgroundColor = "red";
    document.getElementById("example-text-inputs").focus();
    return false;
  }

  // validate textarea name
  var val_textarea = document.getElementById("exampleTextarea").value;
  if (val_textarea == null || val_textarea == "") {
    document.getElementById("exampleTextarea").style.backgroundColor = "red";
    document.getElementById("exampleTextarea").focus();
    return false;
  }
  // validate email
  if (exampleInputEmail1.value == "") {
    document.getElementById("exampleInputEmail1").style.backgroundColor = "red";
    exampleInputEmail1.focus();
    return false;
  }
  if (exampleInputEmail1.value.indexOf("@", 0) < 0) {
    document.getElementById("exampleInputEmail1").style.backgroundColor = "red";
    exampleInputEmail1.focus();
    return false;
  }
  if (exampleInputEmail1.value.indexOf(".", 0) < 0) {
    document.getElementById("exampleInputEmail1").style.backgroundColor = "red";
    exampleInputEmail1.focus();
    return false;
  }
  //   return false;
}
