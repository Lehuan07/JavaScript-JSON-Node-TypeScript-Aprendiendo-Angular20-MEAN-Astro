/*
Ejercicio 30:
    Crea una funcion que reciba un numero
    y devuelva su factorial.
*/

function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (numero <= 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
if (!isNaN(numero)) {
    let resultado = calcularFactorial(numero);
    alert(`El factorial de ${numero} es ${resultado}.`);
}