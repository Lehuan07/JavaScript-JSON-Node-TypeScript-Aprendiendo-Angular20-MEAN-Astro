/*
Ejercicio 24:

Crea un array con 10 numeros al azar entre el 1 al 100
Luego, pedile al usuario que adivine un numero.

Si acierta, muestra por pantalla un mensaje felicitandolo
si no, muestra el numero correcto.
*/

let numeroUsuario = parseInt(prompt("Elegi un numero del 1 al 100"));

let numeros = [1, 100, 33, 50, 80, 75, 45, 65, 25, 85];

    if(numeros.includes(numeroUsuario)){
        alert("Felicidades, ganaste!")
    }
    else{
        alert(`Mal ahi, los numeros para pegarla era ${numeros}`)
    }


