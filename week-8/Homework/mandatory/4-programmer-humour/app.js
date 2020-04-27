

async function fetchData(){
  const res = await fetch('https://xkcd.now.sh/?comic=latest')
  const data = await res.json()
    displayImg(data.img)
}
try {
  fetchData();
} catch (e) {
  console.error(e);
 } finally {
  console.log('clean here');
}

function displayImg(data){
  const showDiv =document.querySelector('.show')
      showDiv.innerHTML=`<img src="${data}">`
}
