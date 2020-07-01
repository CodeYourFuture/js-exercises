const div = document.getElementById("container");
const img = document.createElement("img");

function fether(){
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(function (data) {
        let myData = data.img;
        console.log(myData);
        div.appendChild(img);
        img.src = myData;
    })
    .catch(anyErr => console.error(anyErr));
}

window.onload = fether;