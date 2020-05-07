const url = "https://xkcd.now.sh/?comic=latest"

function getData() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let img = document.createElement("img");
            document.body.appendChild(img);
            img.src = data.img;
        })
}
getData();