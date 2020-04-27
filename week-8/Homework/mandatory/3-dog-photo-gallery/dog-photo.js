let myButton = document.querySelector("#button");
myButton.addEventListener("click",getFunctionFetch);
function getFunctionFetch(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response =>
           response.json()
            )
        .then(data => {
           const myImageContainer  = document.querySelector("#imageContainer")
           let  divContainer = document.querySelector(".card-body")
           const  myLi = document.createElement("li")
           const myImage = document.createElement("img")
            myImage.className += "card-img-top w-70 m-auto p-auto"
            myImage.src = data.message
            myLi.appendChild(myImage)
            myImageContainer.appendChild(myLi)
            divContainer.appendChild(myImageContainer);
            
        })
        .catch((err) => {
            console.log(err);
        })
}