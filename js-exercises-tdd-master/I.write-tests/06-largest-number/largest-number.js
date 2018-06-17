function getLargestNumber(array) {
    var largestNumber;
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            largestNumber = array[i]
        }
    }
    return largestNumber;
}

module.exports = getLargestNumber;