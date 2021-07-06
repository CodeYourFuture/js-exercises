let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let ulEle = document.getElementById('ul')
    let liTag = document.createElement('li')
    ulEle.appendChild(liTag)
    let imgTag = document.createElement('img')
    liTag.appendChild(imgTag)
    
fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){
 return response.json();
})
.then(function(dogImage){
    imgTag.src = dogImage.message
})
});