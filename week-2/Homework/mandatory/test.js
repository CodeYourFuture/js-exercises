function tidyUpString() {
    let tidiedUpArr = [];
    for (k = 0; k < strArr.length; k++) {
        console.log(i)
        tidiedUpArr[k] = strArr[k].trim()
    }
    return tidiedUpArr;
}

console.log(tidyUpString())