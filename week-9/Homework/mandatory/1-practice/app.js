window.addEventListener('load', ()=>{
let long;
let lat;
let temperatureDescription =document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degrees");
let locationTimezone = document.querySelector(".location-timezone")
let temperatureSection = document.querySelector(".temperature")
let temperatureSpan = document.querySelector(".temperature span")  


    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;


      //const api = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=a7850328643c2540185792c17544c7d1&units=metrics`;
      //const proxy = " ";
      const api =     `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

    fetch(api )
    .then(response => {
        mode: 'no-cors'
        return response.json();
    })
   .then(data => {
       console.log(data);
    const{temperature, summary, icon} = data.currently;
    // Set DOM elements from the API
        temperatureDegree.textContent =temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        // formula for celsius

        let celsius = (temperature - 32)* (5/9);

        //set icon
        setIcons(icon, document.querySelector(".icon"))

        //change temperature from F to C
        degreeSection.addEventListener('click', () => {

            if (temperatureSpan.textContent === "F"){
                temperatureSpan.textContent = "C";
                temperatureDegree.textContent = Math.floor(celsius);

            }else{

                temperatureSpan.textContent = "F"
                temperatureDegree.textContent = temperature;
            }
        })
   })
})



}

function setIcons(icon, iconID){
    const skycons = new Skycons({color:"white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon])
}
})

