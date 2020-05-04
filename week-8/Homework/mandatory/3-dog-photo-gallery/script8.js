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
            let img = document.getElementById('dogImage');
            img.src = data.message;
            console.log(img)
        })
        .catch(err => {
            console.log(err);
        })
}
