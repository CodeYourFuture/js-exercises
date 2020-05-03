let button = document.querySelectorAll(".btn")[0]
button.addEventListener('click', getImage)


function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => console.log(res))
        .then((data) => {
            function forEach() {
                let image = [data.res]
                    (image.url)
                console.log(document.getElementsByClassName('btn')[0].innerText = image)
            }
        })
        .catch((err) => console.log(err));
}

