
let getData = document.getElementById("getData");
getData.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => {
        return Response.json();
    })
    .then(data =>{
        console.log(data);
        let listShow = document.getElementById("listShow");
        let listEle = document.createElement("li");
        let img = document.createElement("img");
        listShow.appendChild(listEle);
        listEle.appendChild(img);
        img.src = data.message;
    })
    .catch(error =>{
        console.log(error);
    })

})