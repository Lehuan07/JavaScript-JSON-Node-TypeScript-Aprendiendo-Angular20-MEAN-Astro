
/*
Ejercicio 13:

Tengo un kanguro que salta 3 metros cada vez.

Haz un programa que me diga cuántos saltos ha dado el kanguro...

y cuál es la distancia total recorrida tras 17 saltos.
*/

let canguro = 3;
let distancia = 17;
let saltos;

do{

saltos = parseInt(prompt("Cuantos saltos metio el canguro? Solo numeros y positivos"));

}
while(isNaN(saltos) || saltos <= 0);

alert(`El canguro recorrio ${canguro*saltos} segun los ${saltos} que ingresaste`);
alert(`Y en 17 saltos, el canguro realizo ${canguro*distancia} metros`);