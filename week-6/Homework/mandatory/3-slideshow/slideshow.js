// Write your code here
let images= [
  { id:'001',
    src:'images/image-one.jpeg',
    
    
  },
  {
    id:'002',
    src:'images/image-two.jpeg',
    
  },
  {
    id:'003',
    src:'images/image-three.jpeg',
    
  },
  {
    id:'004',
    src:'images/image-four.jpeg',
    
  },
]
let i = 1;

const holderEle = document.querySelector('.container')
const imgEle = document.querySelector('.slide')
const btnForward= document.querySelector('.btn-one')
const btnBackward= document.querySelector('.btn-two')
const autoB= document.querySelector('.btn-four')
const autoF= document.querySelector('.btn-three')
document.querySelector('.image-number').innerHTML= `${images[0].id}`

imgEle.setAttribute('src',`${images[0].src}`)

function forward() {
  imgEle.setAttribute('src',`${images[i].src}`)
  document.querySelector('.image-number').innerHTML= `${images[i].id}`

  i++;
  if ( i > images.length-1 ){
    i = 0;
  }
}
btnForward.addEventListener('click',forward)

function backward() {
  imgEle.setAttribute('src',`${images[i].src}`)
  document.querySelector('.image-number').innerHTML= `${images[i].id}`
  i--;
  if (i < 0){
    i = images.length -1
  }
}
btnBackward.addEventListener('click',forward)


// autoB.addEventListener('click',()=>{
//   setInterval(backward,3000)
// })

