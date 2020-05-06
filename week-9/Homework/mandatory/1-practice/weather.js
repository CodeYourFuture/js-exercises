window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDesc = document.querySelector('.temperature-description')
    let tempDeg = document.querySelector('.temperature-degree')
    let locationTimeZ = document.querySelector('.location-timezone')
    let tempSec = document.querySelector('.temperature')
    let tempSpan = document.querySelector('.temperature span')

    if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude
    lat = position.coords.latitude

    const proxy = `https://cors-anywhere.herokuapp.com/`
    const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
    fetch(api)
    .then(response => {
        return response.json
    })

    .then(data => {
        console.log(data)
        const { temperature, summary, icon} = data.currently;
        tempDeg.textContent = temperature;
        tempDesc.textContent = summary;
        locationTimeZ.textContent = data.timezone;

        let celsius = (temperature - 32) * (5 / 9)

        setIcons(icon, document.querySelector(".icon"))

        tempSec.addEventListener('click', ()=> {
            if(tempSpan.textContent === "F") {
                tempSpan.textContent = "C"
                tempDeg.textContent = Math.floor(celsius);
            } else {
                tempSpan.textContent = "F"
                tempDeg.textContent = temperature
            }
        })
    })

})
    } 

function setIcons(icon, iconID){
const skycons = new Skycons ({color: white})
const currentIcon = icon.replace(/-/g, "_").toUpperCase();
skycons.play();
return skycons.set(iconID, Skycons[currentIcon])
}
})