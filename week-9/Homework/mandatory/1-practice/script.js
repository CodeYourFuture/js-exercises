window.addEventListener('load', ()=>{
    let longitude;
    let latitude;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let degreeSection = document.querySelector(".degree-section");
    let degreeSpan = document.querySelector(".degree-section span");
    let locationTimezone = document.querySelector(".location-timezone");
    // let icon = document.querySelector(".icon");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            let proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${latitude},${longitude}`
            fetch(api)
            .then((response) => response.json())
            .then(data =>{
                console.log(data)
                temperatureDegree.textContent = data.currently.temperature;
                temperatureDescription.textContent = data.currently.summary;
                locationTimezone.textContent = data.timezone;
                // set icon
                setIcon(data.currently.icon, document.querySelector(".icon"))
                //FORUMULA FOR CELSIUS
                let celsius = (data.currently.temperature - 32) * (5 / 9);

                //change temperature to Celsius/Farenheit
                degreeSection.addEventListener('click', ()=>{
                    if(degreeSpan.textContent === "F"){
                        degreeSpan.textContent = "C";
                        temperatureDegree.textContent = Math.round(celsius);
                    } else{
                        degreeSpan.textContent = "F";
                        temperatureDegree.textContent = data.currently.temperature;
                    }
                })
            })
        })
    } else{
        console.log('can not find position')        
    }
    function setIcon (icon , iconId){
        let skycons = new Skycons({color: "lightgrey"})
        let currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);

    }
})