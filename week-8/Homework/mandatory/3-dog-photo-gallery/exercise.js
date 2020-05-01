let button=document.querySelector('#btn');
button.addEventListener('click', onClick)
function onClick(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>response.json())
    .then(data =>
        document.querySelector('.display').innerHTML = `<li><img src="${data.message}"></li>`
    )
}
.catch ((error) => console.log(error))