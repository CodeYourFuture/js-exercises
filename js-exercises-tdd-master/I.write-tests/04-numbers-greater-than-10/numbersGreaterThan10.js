module.exports = function (array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (value > 10) {
            result.push(value)
        }
    }

    return result;
}