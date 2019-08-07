function secondLargest(arr) {
  var seconLar = arr.sort(function(a, b) {
    return b - a;
  })[1];
  return seconLar;
}
module.exports = secondLargest;
