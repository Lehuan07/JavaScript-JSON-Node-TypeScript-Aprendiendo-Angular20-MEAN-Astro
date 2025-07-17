/*
Ejercicio 35:

Crea un programa que permita mover la ventana a diferentes posiciones en la pantalla.

Usa botones para mover la ventana a la esquina superior izquierda,
superior derecha, inferior izquierda e inferior derecha.
*/


const anchura = window.screen.width;
const altura = window.screen.height;

let abrirVentana = document.querySelector("#abrirVentana")
const arribaIzq = document.querySelector("#arribaIzq");
const arribaDer = document.querySelector("#arribaDer");
const abajoIzq = document.querySelector("#abajoIzq");
const abajoDer = document.querySelector("#abajoDer");

let miVentana = null;

abrirVentana.addEventListener("click", () => {
    miVentana = window.open("https://www.minijuegos.com/", "Ir a minijuegos", "width=400,height=150,left=200,top=50");
});

arribaIzq.addEventListener("click", () => {
    if (miVentana && !miVentana.closed) {
        miVentana.moveTo(0, 0);
    }
});

arribaDer.addEventListener("click", () => {
    if (miVentana && !miVentana.closed) {
        miVentana.moveTo(anchura - 400, 0); // 400 es el ancho que seteaste
    }
});

abajoIzq.addEventListener("click", () => {
    if (miVentana && !miVentana.closed) {
        miVentana.moveTo(0, altura - 150); // 150 es la altura que seteaste
    }
});

abajoDer.addEventListener("click", () => {
    if (miVentana && !miVentana.closed) {
        miVentana.moveTo(anchura - 400, altura - 150);
    }
});