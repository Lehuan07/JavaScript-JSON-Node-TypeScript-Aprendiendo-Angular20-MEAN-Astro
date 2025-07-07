

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

alert(`La suma total es: ${suma}`);
alert(`Se ingresaron ${contador} números positivos`);

let promedio = suma / contador;
alert(`El promedio es: ${promedio.toFixed(2)}`);
