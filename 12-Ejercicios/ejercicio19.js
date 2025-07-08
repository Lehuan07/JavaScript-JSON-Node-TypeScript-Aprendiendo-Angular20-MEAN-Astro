
/*
Ejercicio 19:

Mostra todos los numeros divisores de un numero
introducido por el usuario

*/

let numIngresado = 0;

do{
    numIngresado = parseInt(prompt("Ingrese un numero"));
}while(isNaN(numIngresado));

for(let i=1; i<= numIngresado; i++){
    if(numIngresado%i == 0){
        console.log(`Los divisores de este numero ${numIngresado} son ${i}`)
    }
}