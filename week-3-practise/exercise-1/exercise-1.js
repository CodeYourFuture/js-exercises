//you given an array with the their indexes,
// write a call back function that pairs first dj and second dj.
// so we know which DJS are paired .

var pairsByIndexRaw = [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]]; //do not edit this line

var pairsByIndex = pairsByIndexRaw; // Complete this statement

//do not edit below this line
var firstDj = ["DjFlex", "DJHardcore", "Baron", "DjDope", "djXtasy"];
var secondDj = ["DjMagic", "DJEkw", "Donfabolo", "KussFiller", "DjKiller"];

var djHubZone = pairsByIndex.map(function(indexes) {
  var Djhub1 = firstDj[indexes[0]];
  var Djhub2 = secondDj[indexes[1]];
  return [Djhub1, Djhub2];
});

console.log(djHubZone);

/*Expected output
[ [ 'DjFlex', 'DjKiller' ],
  [ 'DJHardcore', 'KussFiller' ],
  [ 'Baron', 'Donfabolo' ],
  [ 'DjDope', 'DJEkw' ],
  [ 'djXtasy', 'DjMagic' ] ]

    */
