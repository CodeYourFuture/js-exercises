myFunction();

function myFunction() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showImg(data);
    })
    .catch((error) => console.log(error));
}

function showImg(obj) {
  const imgEl = document.createElement("img");
  document.body.appendChild(imgEl);
  imgEl.src = obj.img;
  imgEl.alt = obj.alt;
}