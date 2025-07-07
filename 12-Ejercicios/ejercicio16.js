
/*
Ejercicio 16:
Escriba la tabla de multiplicar que te diga el usuario
*/

let numeroIngresado = 0;

do{
    numeroIngresado = parseInt(prompt("Ingrese un numero para multiplicar"));
}
while(isNaN(numeroIngresado));
    for(let i = 1; i < 11; i++){
        let mostrar = i*numeroIngresado
        console.log(`${i} * ${numeroIngresado} = ${mostrar}`);
    }
