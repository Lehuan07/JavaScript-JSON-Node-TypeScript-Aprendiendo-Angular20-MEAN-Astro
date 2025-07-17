/*
Ejercicio 36:

Crea una caja de texto que cuente cuántas teclas ha pulsado
el usuario dentro de la caja.

Muestra el número de teclas pulsadas en tiempo real en la web.
*/


let areaTexto = document.querySelector("#areaTexto");
let conteo = document.querySelector("#contador");
let contador = 0

areaTexto.addEventListener("keydown", function(event){
    //Validamos teclas
    const teclasValidas = [
        "Enter", " ", // enter y espacio
    ];
    if (event.key.length === 1 || teclasValidas.includes(event.key)) {
        contador++;
        conteo.textContent = `Usted ingresó ${contador} número de letras`;
    }
})