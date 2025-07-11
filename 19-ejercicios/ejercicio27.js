/*
Ejercicio 27:

Crea un array de personajes de peliculas y
clasificalos en grupos (heroes, villanos etc.)

Muestra un mensaje para cada grupo.

*/

let personajes = ["M:Joker", "B:Batman", "B:Superman", "M:Tor", "B:Harry Potter", "M:Voldemort"];

let heroes =personajes.filter(personaje => personaje.startsWith("B:"));
let villanos = personajes.filter(personaje => personaje.startsWith("M:"));

let nombresHeroes = heroes.map(nombre => nombre.slice(2));
let nombresVillanos = villanos.map(nombre => nombre.slice(2));

document.write(`Los heroes son: ${nombresHeroes.join(", ")}<br>
Los villanos son: ${nombresVillanos.join(", ")}`);