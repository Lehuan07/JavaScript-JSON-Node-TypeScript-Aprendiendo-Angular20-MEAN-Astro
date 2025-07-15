/*
Ejercicio 33:

Crea un programa donde tengas un botón que cuente cuántas veces lo has pulsado.

Cuando llegues a 17 clics, se muestra un mensaje de "¡límite alcanzado!".

Si se sobrepasa, el contador se resetea y el contador comienza de nuevo.
*/

let botoncito = document.querySelector("#click");
let contador = 0;
let parrafo = document.querySelector("#parrafoCuenta")

botoncito.addEventListener("click", ()=>{
    contador ++;
    console.log(contador)
    parrafo.textContent = `Llevas ${contador} numeros de click`
    botoncito.textContent = `Hiciste ${contador} numeros de click`
    if(contador === 17){
        alert("Me rompiste guacho")
        contador = 0;
    }
})