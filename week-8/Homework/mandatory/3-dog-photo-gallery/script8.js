let button = document.querySelectorAll(".btn")[0]
button.addEventListener('click', getImage)

function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
            let list = document.createElement("li")
            document.querySelector("#imageList").appendChild(list);
            let img = document.createElement("img");
            list.appendChild(img);
            img.src = data.message;
        })
        .catch(err => {
            console.log(err);
        })
}
