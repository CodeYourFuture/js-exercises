window.addEventListener('load', () => {
    let long;
    let lat;
    let tempDescr = document.querySelector('.temperature-description')
    let tempDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let temperatureSection = document.querySelector('.temperature')
    let temperatureSpan = document.querySelector('.temperature span')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const proxy = 'https://cors-anywhere.herokuapp.com/'

            const api =  `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`

            fetch(api)
            .then(data => data.json())
            .then(data => {
                const {temperature, summary, icon} = data.currently
                console.log(icon);
                

                tempDegree.textContent = Math.floor(temperature - 32)
                tempDescr.textContent = summary
                locationTimezone.textContent = data.timezone

                let celsius = (temperature - 32) * (5/9)

                setIcons(icon, document.querySelector('.icon'))

                temperatureSection.addEventListener('click' , () => {

                    console.log(temperatureSpan.textContent);
                    
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C"
                        tempDegree.textContent = Math.floor(celsius)
                    } else {
                        temperatureSpan.textContent = "F"
                        tempDegree.textContent = temperature
                    }
                })


            })
            
        })


    } else{
        document.getElementsByTagName('h1').textContent = " Allow the location please"
    }

function setIcons ( icon, iconID){
    const skycons = new Skycons({ color: "white"})
    const currIcon = icon.replace(/-/g, "_").toUpperCase()
    skycons.play()
    return skycons.set( iconID, Skycons[currIcon])
}


})