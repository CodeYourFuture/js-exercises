function showImg(param) {
    let image = document.getElementById("image");
    image.src = param
}

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
            let resultYear = data.year
            console.log(resultYear)
            let resultNews = data.news
            console.log(resultNews)
            let resultSafeTitle = data.safe_title
            console.log(resultSafeTitle)
            let resultTranscript = data.transcript
            console.log(resultTranscript)
            let resultAlt = data.alt
            console.log(resultAlt)
            let resultImg = data.img
            console.log(resultImg)
            let resultTitle = data.title
            console.log(resultTitle)
            showImg(resultImg)

        })
}
getApiData();