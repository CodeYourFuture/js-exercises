function formatSeconds(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainder = seconds % 60;
        //if remainder is 1 digit, put a zero before it
        if (remainder < 10) {
            remainder = `0${remainder}`
        }
        return `${minutes}:${remainder}`
}

console.log(`expect formatSeconds(10) == "00:10", was ${formatSeconds(10)}`)
console.log(`expect formatSeconds(100) == "1:40", was ${formatSeconds(100)}`)
console.log(`expect formatSeconds(60) == "1:00", was ${formatSeconds(60)}`)
console.log(`expect formatSeconds(61) == "1:01", was ${formatSeconds(61)}`)
