window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperatur-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let temperatureSection = document.querySelector('.temperature')
    let temperaturSpan = document.querySelector('.temperature span')

    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(positon => {
    long = positon.coords.longitude
    lat =positon.coords.latitude
    const proxy = " https://cors-anywhere.herokuapp.com/"
    const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
    
    fetch(api)
    .then(data => data.json())
    .then(data=> {
        console.log(data)
        const {temperature, summary, icon} = data.currently
        //Set DOM Elements form the api
        temperatureDegree.textContent = temperature
        temperatureDescription.textContent = summary
        locationTimezone.textContent = data.timezone

        //formula for celsius
        let celsius = (temperature - 32) * (5/9)
        //Set Icons
        setIcons(icon, document.querySelector('.icon'))

        //Set degree to celsius/ Fahrenheit
        temperatureSection.addEventListener('click', ()=>{
            if(temperaturSpan.textContent === 'F°'){
                temperaturSpan.textContent = 'C°'
                temperatureDegree.textContent = Math.floor(celsius)
            } else {
                 temperaturSpan.textContent = 'F°'
                 temperatureDegree.textContent = temperature
                }
        })
    }) 
})
  } 

  function setIcons (icon, iconID){
     const skycons = new Skycons({color: 'white'}) 
     const currentIcon = icon.replace(/-/g, '_').toUpperCase();
     skycons.play();
     return skycons.set(iconID, Skycons[currentIcon])
  }
}) 