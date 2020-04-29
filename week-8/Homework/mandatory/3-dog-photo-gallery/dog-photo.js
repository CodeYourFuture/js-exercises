let myButton = document.querySelector("#button");
myButton.addEventListener("click",getFunctionFetch);
function getFunctionFetch(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(checkResponse)
        .then(response => 
            response.json()
        )   
        .then(data => {
           const myImageContainer  = document.querySelector("#imageContainer")
           let  divContainer = document.querySelector(".card-body")
           const  myLi = document.createElement("li")
           const myImage = document.createElement("img")
            myImage.className += "card-img-top w-60 m-auto p-auto"
            myImage.src = data.message
            myLi.appendChild(myImage)
            myImageContainer.appendChild(myLi)
            divContainer.appendChild(myImageContainer);
            
        })
        .catch((err) => {
            console.log('Error has occurred: ' + err);
        })
}

function checkResponse(response){
 if(!response.ok){
     throw new Error(
        `Encountered something unexpected : ${response.status} - ${response.url}`
    )
 }
 else {
     return response;
 }
}