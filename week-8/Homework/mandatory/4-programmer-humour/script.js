fetch('https://xkcd.now.sh/?comic=latest')
    .then(function(response) {
        return response.json();
    })
    .then(function(obj) {
        console.log(obj);


        addImgToDOM(obj.img);
    })
    .catch((error) => {
        console.log(error);
    })

const addImgToDOM = (image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.style.display = "block";
    imgElement.style.marginRight = "auto";
    imgElement.style.marginLeft = "auto";
    document.body.appendChild(imgElement)
}