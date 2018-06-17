function getEven(numbers) {
    return numbers.filter(function (number) {
        return number % 2 === 0;
    })
}

module.exports = getEven;