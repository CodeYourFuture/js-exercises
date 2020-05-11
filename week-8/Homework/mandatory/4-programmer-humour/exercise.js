fetch('https://xkcd.now.sh/?comic=latest').then(response => {
    console.log(response);
    return response.json();
})

.then(data => {
    console.log(data);
    let imgSrc = data.img
    let image = document.createElement("img")
    image.src = imgSrc
})
