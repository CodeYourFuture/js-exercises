const photoList = document.getElementById('photoList')
const button = document.querySelector('button')

button.addEventListener('click', getPicture)

function getPicture() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json()
        })
        .then(picture => {
            if (picture.status !== 'error')//couldnt catch error
                createPictureList(picture)
        }
        )
        .catch(error => {
            console.log(error)
        })
}

function createPictureList(picture) {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.style.width = '200px'
    img.style.height = '200px'
    li.appendChild(img)
    photoList.appendChild(li)
    img.src = picture.message
}

