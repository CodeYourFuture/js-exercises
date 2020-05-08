window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span")


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";

            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
       
        fetch(api)
            .then(response =>{
                return response.json()
            })
            .then (data => {
                console.log(data);
                const {temperature, summary, icon} = data.currently;
                //Set DOM Elements from the API
                temperatureDegree.textContent = temperature
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

                //Formula for Celcius
                let celsius = (temperature - 32) * 5/9
                //set icons
                setIcons(icon, document.querySelector(".icon"));
                
                //change temperature to Celcius
                temperatureSection.addEventListener("click", () =>{
                    if (temperatureSpan.textContent === "F"){temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = celsius.toFixed(1)
                }else{ 
                    temperatureSpan.textContent === "F";
                    temperatureDegree.textContent = temperature
                    }
                })
            });
        });
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase() //icon has dash in the API but it has underscore in skycons.js therefore replacing - with _ and Uppercase
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon])
    }
} );