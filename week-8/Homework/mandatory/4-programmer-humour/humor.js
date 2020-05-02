function getData(URL) {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      onDataReceive(json);
    })
    .catch((err) => console.log(err));
}

function onDataReceive(data) {
  picTitle(data);
  picDate(data);
  picImg(data);
  picAlt(data);
}

function picTitle(data) {
  const titleType = document.createElement(`h1`);
  const titleHolder = container();
  titleHolder.appendChild(titleType);
  titleType.textContent = data.title;
}

function picDate(data) {
  const dateType = document.createElement(`h4`);
  const dateHolder = container();
  dateHolder.appendChild(dateType);
  dateType.textContent = `year ${data.year} month ${data.month} day ${data.day}`;
}

function picImg(data) {
  const imgPlace = document.createElement(`div`);
  const imgPic = document.createElement(`img`);
  const imgHolder = container();
  imgHolder.appendChild(imgPlace);
  imgPlace.appendChild(imgPic);
  imgPic.src = data.img;
}

function picAlt(data) {
  const altType = document.createElement(`p`);
  const altHolder = container();
  altHolder.appendChild(altType);
  altType.textContent = data.alt;
}

function container() {
  return document.getElementById(`container`);
}

function onLoad() {
  getData(`https://xkcd.now.sh/?comic=latest`);
}

window.onload = onLoad;
