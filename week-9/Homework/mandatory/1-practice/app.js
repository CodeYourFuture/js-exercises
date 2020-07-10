window.addEventListener("load", () => {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=529112615b6aef3609d4abccfeb0e297&units=metric`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const temperature = data.main.temp;
          const summary = data.weather[0].description;
          //Set DOM elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.name;
          //formula for Farenheit
          let farenheit = temperature * (9 / 5) + 32;
          //change temperature from Celsius to Farenheit
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "C") {
              temperatureDegree.textContent = farenheit.toFixed(2);
              temperatureSpan.textContent = "F";
            } else {
              temperatureDegree.textContent = temperature;
              temperatureSpan.textContent = "C";
            }
          });
        });
    });
  }
});
