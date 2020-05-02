// Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// - Create an `index.html` file that will display your random image
// - Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
// - When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
// - After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
// - Incorporate error handling

function getImageData() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      newImage(data);
    })
    .catch((error)=>{
      console.error('Something went wrong')
      console.error(error)
    })
}

function newImage(images) {
  let imgUl = document.querySelector('#imglist')
  let imgList = document.createElement('li')
  let imgBox = document.createElement('img')
  imgUl.appendChild(imgList)
  imgList.appendChild(imgBox)
  imgBox.src = images.message
};

let callBtn = document.querySelector("#imgBtn");

callBtn.addEventListener("click", getImageData)
