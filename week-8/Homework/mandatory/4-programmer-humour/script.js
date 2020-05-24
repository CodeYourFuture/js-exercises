let photo = document.querySelector("div");
function ProgrammingPhoto()
{
    fetch("https://xkcd.now.sh/?comic=latest")
       .then((res) => res.json())
       .then((data) => {
           photo.innerHTML = `<img src=${data.img}>`;
       })
       .catch((error) => console.log("error"))

       
       
}

ProgrammingPhoto();
