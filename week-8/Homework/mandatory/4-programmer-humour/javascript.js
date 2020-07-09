let gallery = document.getElementById("gallery")
fetchData()

function fetchData() {
    fetch('https://xkcd.now.sh/?comic=latest')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            showImg(data)
        })
        .catch((error) => console.log(error));
}
function showImg(data) {
    let img1 = document.createElement("img")
    gallery.appendChild(img1)
    img1.src = data.img
}