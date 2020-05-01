const button = document.querySelector("#button")
const dogList = document.querySelector('#dogList')

button.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( data => data.json())
    .then( data => {
        const img = document.createElement('img')
        img.src = data.message
        const li= document.createElement('li')
        dogList.appendChild(li)
        li.appendChild(img)  

    }) 
    .catch( err => console.log(err))

})