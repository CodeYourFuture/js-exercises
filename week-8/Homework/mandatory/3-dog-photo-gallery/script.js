  //firstBtn = button content in HTML
  const firstBtn = document.getElementById("btn1");
  const list = document.getElementById("unorder-list");

  firstBtn.addEventListener("click", () => {
    fetchData(); 
  });
  

function fetchData(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
     .then( data => {
      generateImage(data);
  })
  .catch((err) => console.log(err));
};

function generateImage(image){
 const imagePlace = document.createElement("img");
 imagePlace.src = image.message;
 const listItem = document.createElement("li");
 listItem.appendChild(imagePlace);
 list.appendChild(listItem);
};