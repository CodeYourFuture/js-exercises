// The code is valid but the program does not produce the expected result
// Why doesn't it work?
// Fix it.

var isHappy = false; //el booleano estaba como string,al quitar las colmillas funciona, funcionaba bien antes porque 
//el valor por defecto es un false 

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
