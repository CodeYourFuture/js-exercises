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
