window.addEventListener("load", () => {
  let long, lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let locationHeader = document.querySelector(".location");
  let temperatureSection = document.querySelector(".degree-section");
  let temperatureSpan = document.querySelector(".degree-section span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=417ce9db1c2e99a20a3ba00302dce6a0`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main,
            { description } = data.weather[0],
            { icon } = data.weather[0];

          // set DOM Elements from API
          let fahrenhiet = ((temp - 273.15) * (9 / 5) + 32).toFixed(1);
          temperatureDegree.innerText = `${fahrenhiet}`;
          temperatureDescription.innerText = `${firstLetterToCapital(
            description
          )}`;
          locationTimezone.innerText = data.name;
          locationHeader.appendChild(setIcons(icon));
          // change Temp to Celsius
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.innerText = "C";
              temperatureDegree.innerText = (temp - 273.15).toFixed(1);
            } else {
              temperatureSpan.innerText = "F";
              temperatureDegree.innerText = fahrenhiet;
            }
          });
        });
    });
  }
  function setIcons(icon) {
    let iconImage = document.createElement("img");
    iconImage.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    return iconImage;
  }
  function firstLetterToCapital(string) {
    if (typeof string !== "string") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
