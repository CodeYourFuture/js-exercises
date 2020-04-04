const blueButton = document.querySelector("#blueBtn")
const orangeButton = document.querySelector("#orangeBtn")
const greenButton = document.querySelector("#greenBtn")

const changeBackgroundOne = document.querySelector('.Jumbotron')
const changeBackgroundTwo = document.querySelector('.buttons .btn-primary')
const changeBackgroundThree = document.querySelector('.buttons .btn-secondary')

blueButton.addEventListener('click', ()=>{
  changeBackgroundOne.style.backgroundColor = `#588fbd`;
  changeBackgroundTwo.style.backgroundColor = `#ffa500`;
  changeBackgroundThree.style.backgroundColor = `black`;
  changeBackgroundThree.style.color=`white`;
})
orangeButton.addEventListener('click', ()=>{
  changeBackgroundOne.style.backgroundColor = `#f0ad4e`;
  changeBackgroundTwo.style.backgroundColor = `#5751fd`;
  changeBackgroundThree.style.backgroundColor = `#31b0d5`;
  changeBackgroundThree.style.color=`white`;
})
greenButton.addEventListener('click', ()=>{
  changeBackgroundOne.style.backgroundColor = `#87ca8a`;
  changeBackgroundTwo.style.backgroundColor = `#black`;
  changeBackgroundThree.style.backgroundColor = `8c9c08`;
 
})






