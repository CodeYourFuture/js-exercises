
fetch ('https://dog.ceo/api/breeds/image/random')
.then((response )=> {
    return response.json();
   })
   
   .then((randomDogImg)=> {
       //console.log(randomDogImg.message);
       
      getRandomDogImg(randomDogImg)
   })

const main = document.getElementById('main')
const btnElement = document.createElement('button')
const ulElement = document.createElement('ul')
      main.append(btnElement, ulElement)
const liElement =document.createElement('li')
const imgElement =document.createElement('img')
const containerList = ulElement.appendChild(liElement)
const imgList = liElement.appendChild(imgElement)

   const getRandomDogImg= (dogImg) => {
    imgElement.src = dogImg.message
    
}