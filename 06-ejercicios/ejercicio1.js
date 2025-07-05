/*
Ejercicio 1:

Calcula cuántas horas le llevaría llegar a la luna a una nave espacial 
y guarda el resultado en una variable.

La distancia desde la Tierra hasta la Luna es de 384.400 kilómetros.
La velocidad de la nave es de 1225 kilómetros por hora.
*/

const disTierra = 384000;
const velocidad = 1225;

const horas = disTierra/velocidad;

console.log("La cantidad de horas que se tarda de la tierra a la luna con una velocidad constante de " + velocidad + "k/h es de " + Math.ceil(horas));