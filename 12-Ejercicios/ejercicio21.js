
/*
Ejercicio 21:

Calculadora:
- Pida dos números por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En una alerta y por la consola el resultado debes
sumar, restar, multiplicar y dividir esas dos cifras
*/

let num1 = 0;
let num2 = 0;
do{
    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese un numero"));
}while(isNaN(num1) || isNaN(num2));


let suma = num1 + num2;
if(num1>num2){

    var resta = num1 - num2;
} else{
    resta = num2 - num1;
}

let multi = num1 * num2;

let divi = num1/num2;


console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multi}`);
console.log(`División: ${divi}`);
alert(`Los resultados son:
    Suma: ${suma}.
    Resta: ${resta}.
    Multiplicacion: ${multi}
    Division: ${divi}`)