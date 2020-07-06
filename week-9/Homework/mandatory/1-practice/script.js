window.addEventListener("load", () => {
    let long;
    let lat;

    let tempratureDescription = document.getElementById("temprature-description");
    let tempratureDegree = document.getElementById("degree");
    let locationTimeZone = document.getElementById("location-timezone");
    let tempratureSection = document.getElementById("degree-section");
    let tempratureSpan = document.getElementById("tempUnit")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = " https://cors-anywhere.herokuapp.com/";
            const url = "https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/" + lat + "," + long;

            fetch(proxy + url)
                .then(response => { return response.json() })
                .then(data => {
                    console.log(data);
                    const temprature = data.currently.temperature;
                    const summary = data.currently.summary;
                    const icon = data.currently.icon;
                    const timezone = data.timezone
                    tempratureDegree.innerText = temprature;
                    tempratureDescription.innerText = summary;
                    locationTimeZone.innerText = timezone;
                    //formula doe c=>f
                    let celsius = (temprature - 32) * (5 / 9);

                    //set icon
                    setIcons(icon, document.getElementById("icon1"))
                        // changing temprature  to c
                    tempratureSection.addEventListener("click", () => {
                        if (tempratureSpan.innerText === "F") {
                            tempratureSpan.innerText = "C";
                            tempratureDegree.innerText = Math.floor(celsius)

                        } else
                        if (tempratureSpan.innerText === "C") {
                            tempratureSpan.innerText = "F"
                            tempratureDegree.innerText = temprature;
                        }
                    })


                });

        })


    }

    function setIcons(icon, iconId) {
        const skycons = new Skycons({ color: "white" })
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
})