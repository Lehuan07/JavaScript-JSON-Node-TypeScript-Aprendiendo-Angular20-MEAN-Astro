/*
Ejercicio 14:

Un DJ no sabe qué género musical poner en la fiesta...

Preguntale al usuario qué género quiere (pop, rock o rap)

Según lo que prefiera, devuelve un mensaje diferente.
*/

let dj;

do {
    dj = prompt("¿Qué querés escuchar? Tenemos Rock, Pop o Rap").toLowerCase();
} while (dj !== "rock" && dj !== "pop" && dj !== "rap");

if (dj === "rock") {
    alert("Ok, vamos a escuchar AC/DC");
} else if (dj === "pop") {
    alert("¿Un poco de Madonna?");
} else if (dj === "rap") {
    alert("¡Vamos con Eminem!");
}