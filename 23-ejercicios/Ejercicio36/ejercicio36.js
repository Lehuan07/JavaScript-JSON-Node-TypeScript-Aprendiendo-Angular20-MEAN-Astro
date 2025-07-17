/*
Ejercicio 36:

Crea una caja de texto que cuente cuántas teclas ha pulsado
el usuario dentro de la caja.

Muestra el número de teclas pulsadas en tiempo real en la web.
*/


let areaTexto = document.querySelector("#areaTexto");
let conteo = document.querySelector("#contador");
let contador = 0

areaTexto.addEventListener("input", () => {
    const cantidad = areaTexto.value.length;
    conteo.textContent = `Usted ingresó ${cantidad} caracteres`;
});