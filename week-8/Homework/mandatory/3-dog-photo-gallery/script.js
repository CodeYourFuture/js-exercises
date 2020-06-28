function onLoad() {

    var butElement = document.getElementById('newDogPhoto');
    butElement.addEventListener("click", function addDogPhotoToDOM() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(function(response) {
                return response.json();


            })
            .then(function(obj) {
                const listElement = document.createElement('ul');
                document.body.appendChild(listElement);
                const imgElement = document.createElement('img');
                imgElement.src = obj.message;
                listElement.appendChild(imgElement);
                imgElement.style.maxWidth = "300px";
                imgElement.style.maxHeight = "300px";
                imgElement.style.display = "block";
                imgElement.style.marginLeft = "auto";
                imgElement.style.marginRight = "auto";

            })
            .catch((error) => {
                console.log(error);
            })
    })




}

window.onload = onLoad;