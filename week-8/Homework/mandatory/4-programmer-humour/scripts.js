function getApiData() {
    fetch('https://xkcd.now.sh/?comic=latest')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            let resultMonth = data.month
            console.log(resultMonth)
            let resultNum = data.num
            console.log(resultNum)
            let resultLink = data.link
            console.log(resultLink)
        })
}
getApiData();