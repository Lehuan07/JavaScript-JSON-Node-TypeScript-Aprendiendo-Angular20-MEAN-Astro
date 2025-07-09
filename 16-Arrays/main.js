/*Arrays, arreglos, matrices:
    Es una lista ordenada de elementos.
    Siempre estan ordenados y empiezan con el 0
*/
//Forma 1 y mas recomendada
let nombre = "Nahuel";

let nombres = ["Nahuel", "Agustina", "Soledad", "Nazareno"];
//                0           1          2          3

console.log(nombres)

//Forma 2

let peliculas = new Array("Pinocho", "Iron Man", "Caperucita");

console.log(peliculas)

//Accede a los elementos:

console.log(nombres[1])

//Modificar los elementos:

nombres[2] = "Hector";

console.log(nombres)

//Practica

let elemento = parseInt(prompt("Elegi el Nombre que buscas:"));

if(elemento >= nombres.length){
    alert("Ese usuario no existe, elegi otro")
}
else{
    alert("Encontraste a ".concat(nombres[elemento]))
}
