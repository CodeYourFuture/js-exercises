
// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(URL) {
  fetch(URL)
// Get the response and extract the JSON
.then(function (response) {
return response.json();
})
// Do something with the JSON
.then((user) => {
console.log(user);
console.log(user.results[0]);
onDataReceived(user.results[0])
})
// If something goes wrong 
.catch((error) => console.log(error)); 
}
function onDataReceived(user) {
addName(user);
addProfilePic(user);
}
// This function should take the JSON for the user and put a H1 tag on the screen containing its name
function addName(user) {
  const nameElement = document.createElement("h1"); // here we're just creating it, element is not visible yet
  const content = getContentDiv();
  nameElement.innerText = user.name.first + ' ' + user.name.last;
  content.appendChild(nameElement);
}
// This function should take the JSON for the user and put a imgg on the screen containing its profile pic
function addProfilePic(user) {
  const img = document.createElement("img"); // here we're just creating it, element is not visible yet
  const content = getContentDiv();
  img.src = user.picture.medium;
  content.appendChild(img);
}
function getContentDiv() {
return document.querySelector("#content");
}
function onLoad() {
getData(
  "https://www.randomuser.me/api"
);
for (var i; i<10; i++) {
  getData("https://www.randomuser.me/api")
}
}
window.onload = onLoad;

// test dog 

function getData(apiURL){
	fetch(apiURL)
	.then(respone => {
		if(respone.ok){
			return respone.json();
		}else{
			throw new Error(`404 Page not Found :(`);
		}})
	.then(data => showDog(data))
}


function showDog(data){
  let imgEL = document.querySelector('img')
  return imgEL.src =	data.message;
}


document.getElementById('btn').addEventListener('click', () => {
	getData('https://dog.ceo/api/breeds/image/random')
}) 









