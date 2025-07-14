/*
Ejercicio 31:

Crea un semáforo con tres luces (rojo, amarillo y verde)
Haz los círculos del semáforo con HTML y CSS.

Cuando un peatón quiere cruzar la calle debe pulsar un botón.
Crea un botón para cambiar el color de las luces del semáforo
secuencialmente (de rojo a verde, pasando por amarillo).

Entonces,
El semáforo siempre empieza en rojo.
Cuando haces click en el botón, pasará a amarillo.
Al hacer click otra vez, pasa a verde, y así todo el rato.
*/

let boton = document.querySelector("#boton");
let rojo = document.querySelector("#rojo");
let amarillo = document.querySelector("#amarillo");
let verde = document.querySelector("#verde");

let estado = 0;


boton.addEventListener("click", ()=>{

    rojo.classList.remove("activa");
    amarillo.classList.remove("activa");
    verde.classList.remove("activa");

    if(estado ===0){
        rojo.classList.remove("activa");
    estado = 1;
    }
    else if(estado === 1){
        rojo.classList.add("activa");
        setTimeout(()=>{
            rojo.classList.remove("activa");
            amarillo.classList.add("activa");
        }, 1000)
        setTimeout(()=>{
            amarillo.classList.remove("activa");
            verde.classList.add("activa")
        }, 2000)
        setTimeout(() => {
            verde.classList.remove("activa")
            estado = 0;
        }, 5000);
    }
});

/*
boton.addEventListener("click", ()=>{

    rojo.classList.remove("activa");
    amarillo.classList.remove("activa");
    verde.classList.remove("activa");

    if(estado ===0){
        rojo.classList.add("activa");
    estado = 1;
    }
    else if(estado === 1){
        amarillo.classList.add("activa");
        estado = 2;
    }
    else if(estado === 2){
        verde.classList.add("activa");
        estado = 0;
    }
});
*/