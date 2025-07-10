/*
Ejercicio 26:

Dado un array de palabras, cuenta cuantas letras tiene cada palabra
y crea un array que contenga solo esos numeros

*/

let palabras = ["chocolate", "Miguel", "Ernesto", "Batidora", "A jugar con hugo"];
let numerosArray = [];

palabras.forEach(palabra => {
    numerosArray.push(palabra.length);
});

alert(`Los números de letras por palabra son: ${numerosArray.join(", ")}`);