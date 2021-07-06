
let img = document.getElementById('img')
 fetch('https://xkcd.now.sh/?comic=latest')
 .then((response)=>{
return response.json();
 })
 .then((data)=> 
 img.src = data.img
 )