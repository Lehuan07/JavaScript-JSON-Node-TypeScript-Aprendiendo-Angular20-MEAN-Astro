
/*
Ejercicio 12:

Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales.

PLUS: Si los números no son un número o son menores o iguales a cero,
nos los vuelva a pedir.
*/

let num1, num2;

do {
    num1 = parseInt(prompt("Ingrese un número mayor a 0"));
    num2 = parseInt(prompt("Ingrese otro número mayor a 0"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("⚠️ Solo se permiten números.");
    } else if (num1 <= 0 || num2 <= 0) {
        alert("⚠️ Ambos números deben ser mayores que cero.");
    }
} while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

// Comparación
if (num1 === num2) {
    alert("🔁 Los dos números son iguales.");
} else if (num1 > num2) {
    alert("📈 El primer número (" + num1 + ") es mayor que el segundo (" + num2 + ").");
} else {
    alert("📈 El segundo número (" + num2 + ") es mayor que el primero (" + num1 + ").");
}