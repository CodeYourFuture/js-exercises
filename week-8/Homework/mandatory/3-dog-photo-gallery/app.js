

document.querySelector('.btn').addEventListener('click',async()=>{
  console.log('hello world')
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  const ul= document.querySelector('.list-holder')
    ul.innerHTML=`<li><img src=${data.message}></li>`
})