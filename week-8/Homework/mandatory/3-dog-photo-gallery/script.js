let photo = document.querySelector(".list");
function dogPhoto()
{
    fetch("https://dog.ceo/api/breeds/image/random")
       .then((res) => res.json())
       .then((data) => {
           photo.innerHTML = `<img src=${data.message}>`;
       })
       .catch((error) => console.log("error"))

       
       
}

let dogButton = document.querySelector("button")
dogButton.addEventListener("click", () => {
    dogPhoto();
});