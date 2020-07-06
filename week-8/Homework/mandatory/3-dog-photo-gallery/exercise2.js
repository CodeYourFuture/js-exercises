function getTheNewPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var Thescr = data.message;
      getThePohto(Thescr);
      console.log(data.message);
    });
}

var theBtn = document.getElementById("btn");

function getThePohto(photo) {
  var theUls = document.getElementById("ul");
  var newLi = document.createElement("li");
  var theImg = document.createElement("img");
  theImg.src = photo;
  theImg.id = "img";
  newLi.appendChild(theImg);
  theUls.appendChild(newLi);
}

theBtn.addEventListener("click", getTheNewPhoto);
