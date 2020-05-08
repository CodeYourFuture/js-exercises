function onLoad() {
  let long;
  let lat;
  let proxy = "https://cors-anywhere.herokuapp.com/";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

      fetch(api)
        .then((response) => response.json())
        .then((json) => {
          dataReceiving(json);
        });
    });
  } else {
    alert(`I couldn't find access to your location`);
  }
}

function getData(URL) {}

function dataReceiving(data) {
  timeZoneSection(data);
  temperatureSection(data);
}

function timeZoneSection(data) {
  //location timezone
  const location = document.getElementById(`location`);
  const locationTimeZone = document.createElement(`h1`);
  location.appendChild(locationTimeZone);
  locationTimeZone.id = `locationTimeZone`;
  locationTimeZone.textContent = `${data.timezone}`;

  //location timezone icon
  const locationTimeZoneIcon = document.createElement(`canvas`);
  location.appendChild(locationTimeZoneIcon);
  locationTimeZoneIcon.id = `timeZoneIcon`;
  let skycons = new Skycons({ color: "white" });
  let currentIcon = data.currently.icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  locationTimeZoneIcon.textContent = `icon`;
  skycons.set("timeZoneIcon", Skycons[currentIcon]);
}

function temperatureSection(data) {
  //degree section
  const temperatureDiv = document.getElementById(`temperature`);
  const degreeSection = document.createElement(`div`);
  degreeSection.id = `degreeSection`;
  temperatureDiv.appendChild(degreeSection);
  const degree = document.createElement(`h2`);
  degree.id = `degree`;
  degreeSection.appendChild(degree);
  let fahrenheit = data.currently.temperature;
  degree.textContent = `${fahrenheit}`;

  //unit
  const unit = document.createElement(`span`);
  unit.id = `unit`;
  degreeSection.appendChild(unit);
  unit.innerHTML = `F`;
  temperatureDiv.addEventListener(`click`, () => {
    if (unit.textContent === `F`) {
      unit.innerText = `C`;
      degree.textContent = `${Math.floor((fahrenheit - 32) * (5 / 9))}`;
    } else {
      unit.innerText = `F`;
      degree.textContent = `${fahrenheit}`;
    }
  });

  //description
  const temperatureDescription = document.createElement(`div`);
  temperatureDescription.id = `description`;
  temperatureDiv.appendChild(temperatureDescription);
  temperatureDescription.textContent = `${data.currently.summary}`;
}

window.onload = onLoad;
