
const timezone = document.getElementById("location")
const icon = document.getElementById("icon")
const temp = document.getElementById("temp")
const description = document.getElementById("description")



function fetchWeatherApi() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=33b0f1fb188dca603cce55b96f781e76
            `;

            https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=417ce9db1c2e99a20a3ba00302dce6a0
            fetch(url)
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(data => {
                    displayWeatherOnScreen(data)
                })
        })
    }
}

function displayWeatherOnScreen(Data) {
    console.log(Data)
    timezone.innerText = `${Data.name}/${Data.sys.country}`
    icon.src = `http://openweathermap.org/img/wn/${Data.weather[0].icon}@4x.png`
    temp.innerText = `${Math.floor(Data.main.temp)}°C`
    description.innerText = `${makeUpperCase(Data.weather[0].description)}`
}

function makeUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}

window.onload = fetchWeatherApi
