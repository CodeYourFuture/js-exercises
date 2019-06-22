var util;

function porcentaje(number){
 var resultado = Math.round((number*100)/23);
 return resultado;
}

function mensaje(ocupacion,number){
 var resultado = porcentaje(number);
 console.log("Percentage "+ocupacion+": "+resultado+"%");
}

util = mensaje("Student",15);
util = mensaje("Mentors", 8);
