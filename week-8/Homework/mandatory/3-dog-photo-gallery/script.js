// var button = document.createElement("button");
// button.innerHTML = "click for a random dog photo";

// // 2. Append somewhere
// var body = document.getElementsByTagName("body");
// body.appendChild(button);

// //3. Add event handler
// var cont = document.getElementById("container");
// var ul = document.createElement("ul");
// var li = document.createElement("li");
// ul.appendChild(li);
// cont.appendChild(ul);

// button.addEventListener("click", function () {
//   fetch("https://dog.ceo/api/breeds/image/random");

//   .then((response) => response.json())
//   .then((data) =>
//     return  (li.innerHTML = `< img src = "${data.file}" />`);
// });

const dogImage1 = document.getElementById("dog-img1");
const dogButton1 = document.getElementById("btn1-dog");
const dogButton2 = document.getElementById("btn2-dog");
const dogImage2 = document.getElementById("dog-img2");

dogButton1.addEventListener("click", fetchDogImage1);
dogButton2.addEventListener("click", fetchDogImage2);

function fetchDogImage1() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImage1.innerHTML = `<img src="${data.message}"/>`;
    });
  //.catch ((error) => Alert("there is an error"));
}

function fetchDogImage2() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImage2.innerHTML = `<img src="${data.message}"/>`;
    });
  // .catch ((error) => Alert("there is an error"));
}
