window.addEventListener("load", () => {
  //executes the event when the page loads
  let long; //variables to store longitude
  let lat; ///variables to store latitude

  /*The dom selector of my elements */
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureSection = document.querySelector(".degree-section");
  let temperatureSectionSpan = document.querySelector(".span");
  let locationTimezone = document.querySelector(".location-timezone");

  /*access the location using the browser build in methods*/
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // getCurrentPosition is function that gets the latitude and longitude of position
      long = position.coords.longitude; // assigns the position to the variables
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/"; // proxy to allow local host access the Api
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`; // Api url injected with latitude and longitude
      fetch(api) // fetches the api
        .then((response) => {
          // converts a data into json from the api
          return response.json();
        })
        .then((data) => {
          // returns the data
          console.log(data);
          const { temperature, summary, icon } = data.currently; // access the temperature summary and icon of the data

          temperatureDegree.textContent = temperature; // assigns the temperature to selected class temperature degree.
          temperatureDescription.textContent = summary; // assigns the  summary to selected class temperature description.
          locationTimezone.textContent = data.timezone; // assigns the timezone to selected class location timezone.

          let celsius = (temperature - 32) * (5 / 9); // converts fahrenheit to Celsius
          setIcons(icon, document.querySelector(".icon")); // calls setIcon function  with the icon retrieved from the object. and selects the icon

          temperatureSectionSpan.addEventListener("click", () => {
            // adds an event listener to the span
            if (temperatureSectionSpan.textContent === "F") {
              // if the temperature span === F it would change to C
              temperatureSectionSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius); // rounds the Celsius
            } else {
              temperatureSectionSpan.textContent = "F"; // change the temperature to F
              temperatureDegree.textContent = temperature; // change the temperature degree to fahrenheit
            }
          });
        });
    });
  }
  function setIcons(icon, iconID) {
    // function that gets an icon  an icon id as a parameter.
    const skycons = new Skycons({ color: "white" }); // set color of icons to white.
    const currentIcon = icon.replace(/-/g, "_").toUpperCase(); // replace to dash to underscore and toUpperCase.
    skycons.play(); // plays the icon animation
    return skycons.set(iconID, Skycons[currentIcon]); // returns the icon which is current.
  }
});
