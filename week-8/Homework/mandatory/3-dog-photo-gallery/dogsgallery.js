document.getElementById("imgBtn").addEventListener("click", function (){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        console.log(response);
        return response.json();
})
.then(data => {
    console.log(data);
    let element = data.message
    console.log(element)
    let ul = document.getElementById("list")
    let imgList = document.createElement("li")
    let dogImg = document.createElement("img")
    dogImg.src = element
    imgList.appendChild(dogImg)
    ul.appendChild(imgList)
})
})