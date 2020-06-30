
const ul = document.getElementById("saver");
const btn = document.getElementById("click");
const li = document.createElement("li");
const myImg = document.createElement("img");

function displayer(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => data.message)
    .then(function (img){
     li.appendChild(myImg);
     li.style.listStyleType = "none"
     ul.appendChild(li);
     myImg.src = img;
    })
    .catch(err => console.error(err));
}

btn.addEventListener("click",displayer)
window.onload = displayer;
    