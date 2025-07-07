

/*Ejercicio 15:
Muestra la suma y metrica de los numeros introducidos.
Hasta introducir uno negativo y ahi mostrar el resultado*/

let numeroIngresado = parseFloat(prompt("Ingrese un número para sumar (positivo)"));
let suma = 0;
let contador = 0;
while(numeroIngresado >= 0){
    suma += numeroIngresado;
    contador++;
    numeroIngresado = parseFloat(prompt("Cuando quieras salir, poné un número negativo"));
    
}

alert(suma)
alert (contador);
