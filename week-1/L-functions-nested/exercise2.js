/*

*I feel this code all looks very hacky.

*/

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var array = [mentor1, mentor2, mentor3, mentor4, mentor5]
var upperCase = array.map(function(arrayobject) {
  return arrayobject.toUpperCase()
})

function greeting() {
  message = 'HELLO' + ' ' + upperCase[i]
  return message
}

  for (var i = 0; i < upperCase.length; i++) {
    console.log(greeting(upperCase))
  }