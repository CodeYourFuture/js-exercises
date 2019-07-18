// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = false;
// En el codigo original la comparacion se hace es con el tipo de dato no con el valor dentro de la variable, lo mas correcto seria
// comparar el valor almacenado y no el tipo de dato

//he modificado el codigo eliminando las commillas haciendo la comparacion en booleano y no en string
if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
