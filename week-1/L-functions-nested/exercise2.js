var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function ConvertirMayuscula(nombre){
 nombre = nombre.toUpperCase();
 return nombre;
}

function saludo(nombre){
 nombre = ConvertirMayuscula(nombre);
 console.log("HELLO "+nombre);
}

saludo(mentor1);
saludo(mentor2);
saludo(mentor3);
saludo(mentor4);
saludo(mentor5);
