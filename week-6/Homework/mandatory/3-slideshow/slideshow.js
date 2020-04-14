// Write your code here
const images = ['http://www.cat-breed-info.com/images/catsphynx.jpg',
'http://www.cat-breed-info.com/images/americancurlcat2.jpg',
'http://www.cat-breed-info.com/images/selkirkrex1.jpg']

let catImage= document.querySelector('#image')
const btnBack = document.querySelector('#btnBack')
const btnForward = document.querySelector('#btnForward')
const btnAutoBack = document.querySelector('#btnAutoBack')
const btnAutoForward = document.querySelector('#btnAutoForward')
const btnStop = document.querySelector('#btnStop')
const count = document.querySelector('#count')
const input = document.querySelector('#input')


let i = 0;
let setBack, setForward
count.innerText = i;

let imagesForward = function(){ 
    i++;
    i === images.length ? i = 0 : 0
    catImage.src = images[i]
    count.innerText = i;
}

let imagesBack = function(){
    i--;
    i === -1 ? i = images.length-1 : 0
    catImage.src = images[i] 
    count.innerText = i;
}

btnBack.addEventListener('click', imagesBack)
btnForward.addEventListener('click', imagesForward)



btnAutoBack.addEventListener('click', function(){
    setBack = setInterval(function(){
        i--;
        i === -1 ? i = images.length-1 : 0
        catImage.src = images[i]
        count.innerText = i; 
    }, input.value *1000 || 1000)
    
    btnAutoBack.disabled = true
    btnAutoForward.disabled = true
    btnBack.disabled = true
    btnForward.disabled = true
    btnAutoBack.style.border = "2px solid red"
    
})


btnAutoForward.addEventListener('click', function(){

        setForward = setInterval(function(){ 
        i++;
        i === images.length ? i = 0 : 0
        catImage.src = images[i]
        count.innerText = i;
        }, input.value *1000 || 1000)

        btnAutoBack.disabled = true
        btnAutoForward.disabled = true
        btnBack.disabled = true
        btnForward.disabled = true
        btnAutoForward.style.border = "2px solid red"

})



btnStop.addEventListener('click', function(){
    clearInterval(setBack);
    clearInterval(setForward)
    btnAutoForward.disabled = false
    btnAutoBack.disabled = false
    btnBack.disabled = false
    btnForward.disabled = false
    btnAutoForward.style.border = "1px solid black"
    btnAutoBack.style.border = "1px solid black"
})

    










