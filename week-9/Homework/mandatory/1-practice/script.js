window.addEventListener("load", () => {
  let lat;
  let long;
  let tempDescription = document.querySelector(".tempreture-description");
  let tempDegree = document.querySelector(".tempreture-degree");
  let locationTimezone = document.querySelector(".location-zone");
  let tempretureSection = document.querySelector(".tempreture");
  const tempretureSpan = document.querySelector(".tempreture span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = " https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;
          // const { description, icon } = data.current.weather;

          tempDegree.textContent = temperature;
          tempDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          //formulla for celcius
          let celsius = (temperature - 32) * (5 / 9);

          //set Icon
          setIcon(icon, document.querySelector(".icon"));

          //change tempreture to celsius/farenheit
          tempretureSection.addEventListener("click", () => {
            if (tempretureSpan.textContent === "F") {
              tempretureSpan.textContent = "C";
              tempDegree.textContent = Math.floor(celsius);
            } else {
              tempretureSpan.textContent = "F";
              tempDegree.textContent = temperature;
            }
          });
        });
    });
  }
  function setIcon(icon, iconId) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);
  }
});
