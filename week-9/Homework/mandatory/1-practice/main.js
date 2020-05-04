window.addEventListener("load" ,() => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let LocationTimeZone = document.querySelector(".Timezone");
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.altitude;
           
           const proxy = "https://cors-anywhere.herokuapp.com/";
          // const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
           const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/37.8267,${long}`;
           fetch(api)
      .then(response => {
          return response.json();
      })
      .then(data => {
          const {temperature, summary, icon} = data.currently;

          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          LocationTimeZone.textContent = data.timezone;
          setIcons(icon, document.querySelector(".icon"));
      });
        });
    }
    function setIcons(icon, iconID){
      console.log(icon, iconID);
      const skycons = new Skycons({"color": "pink"});
      const currentIcon = icon.replace(/-/g,"_").toUpperCase();
      skycons.play();
      console.log(currentIcon, iconID);
      return skycons.set(iconID, skycons[currentIcon]);
    }
});