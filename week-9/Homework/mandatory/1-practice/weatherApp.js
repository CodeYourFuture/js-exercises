window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree =  document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let iconEl = document.querySelector(".icon");
    let temperatureSection = document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature span");



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
             long = position.coords.longitude;
             lat = position.coords.latitude;
             const proxy = " https://cors-anywhere.herokuapp.com/";
             const url = "https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/" + lat + "," + long;
             //console.log(proxy + url);
             fetch(proxy + url )
             .then(resposne => resposne.json())
             .then(data =>{
                 const {temperature, summary, icon} = data.currently;
                 let temperatureConversion = (temperature - 32) * 5/9;
                 let temperatureinC = temperatureConversion.toFixed(1);

                 temperatureDegree.textContent = temperatureinC;
                 temperatureDescription.textContent = summary;
                 locationTimezone.textContent = data.timezone;
                 setIcons(icon, iconEl);
                 temperatureSection.addEventListener("click", ()=> {
                     if(temperatureSpan.textContent === 'C'){
                         temperatureSpan.textContent = 'F';
                         temperatureDegree.textContent = temperature;
                     } else{
                         temperatureSpan.textContent = 'C';
                         temperatureDegree.textContent = temperatureinC;
                     }
                 })
                 
             });
        });

    }else {
        h1.innerText = "Ooops something went wrong!"
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }


});