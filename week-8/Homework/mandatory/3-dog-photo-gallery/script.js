let x = document.getElementById("gallery")
let clickedButton = document.getElementById("button")
let list = document.getElementById("list")
function fetchData() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            showImg(data)
        })
        .catch((error) => console.log(error));
}
clickedButton.addEventListener("click", fetchData)
function showImg(data) {
    let ul = document.createElement("li")
    list.appendChild(ul)
    let img1 = document.createElement("img")
    ul.appendChild(img1)
    img1.src = data.message
}