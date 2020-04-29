function getImageFromApi(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            addNewPhoto(data)
        })
        .catch(error => console.log(error));
}

function addNewPhoto(newPhoto){
    let photoList = document.querySelector(".photoList");
    photoList.innerHTML += `<li>
    <img id="newImage" src=${newPhoto.message}></img>
    </li>`; 
}

const clickButton = document.getElementById("getPhotoButton")

clickButton.addEventListener("click", getImageFromApi)
