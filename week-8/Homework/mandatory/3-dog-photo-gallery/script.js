function imageData() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getImage(data);
    })
    .catch((error) => {
      console.log("Check your internet connection please");
    });
}

function getImage(image) {
  let imageUl = document.querySelector("#list");
  let imageList = document.createElement("li");
  let imageBox = document.createElement("img");

  imageUl.appendChild(imageList);
  imageList.appendChild(imageBox);
  imageBox.src = image.message;
}

let btn = document.querySelector("#btn1");
btn.addEventListener("click", imageData);
