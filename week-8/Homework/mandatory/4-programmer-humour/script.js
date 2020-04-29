fetch("https://xkcd.now.sh/?comic=latest")
  .then((response)=> {
    return response.json();
  })
  
  .then((data) => {
    console.log(data);
    showData(data);
  })

  .catch((error) => {
      console.log(error)
  });

function showData(d){
    let pEl = document.getElementById("pEl");
    pEl.innerText = d.title;
    let imgEl = document.createElement("img");
    document.body.appendChild(imgEl);
    imgEl.src = d.img;
}