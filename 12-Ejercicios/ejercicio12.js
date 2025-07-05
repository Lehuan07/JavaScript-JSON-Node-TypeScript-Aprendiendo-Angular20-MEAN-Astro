
/*
Ejercicio 12:

Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales.

PLUS: Si los números no son un número o son menores o iguales a cero,
nos los vuelva a pedir.
*/

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero, igual o distinto"));
do{
    if(isNaN(num1) || isNaN(num2) || num1>0 ||num2>0){
        alert("Solo numeros y positivos");
        num1 = parseInt(prompt("Ingrese un numero"));
        num2 = parseInt(prompt("Ingrese otro numero, igual o distinto"));
    }

}while(isNaN(num1) === true && isNaN(num2) === true && num1>0 && num2>0){
        if(isNaN(num1) || isNaN(num2)){
        alert("Solo numeros");
    }
    if(num1 === num2){
        alert("Son iguales")
    }
}