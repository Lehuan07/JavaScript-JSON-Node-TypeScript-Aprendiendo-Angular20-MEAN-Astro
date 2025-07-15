/*
Ejercicio 32:

Crea una lista de la compra en la que el usuario pueda añadir
nuevos productos para comprar con un campo de texto y un botón.

Cada vez que se añade un producto, este aparece
en la lista con un botón para eliminarlo.

El usuario podrá añadir tantos productos como quiera.
Cada producto añadido tiene un botón para borrarlo de la lista.

*/

let nuevoProducto = document.querySelector("#agregarArticulo");
let boton = document.querySelector("#button");
let lista = document.querySelector("#lista");

boton.addEventListener("click", function(){
    event.preventDefault();
    let productoParaArgregar = nuevoProducto.value.trim();

    if(productoParaArgregar){

        const agregarProducto = document.createElement("li");
        agregarProducto.textContent = productoParaArgregar;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Borrar";
        btnEliminar.addEventListener("click", ()=>{
            agregarProducto.remove();
        })

        
        lista.appendChild(agregarProducto);
        nuevoProducto.value = "";
        agregarProducto.appendChild(btnEliminar);
        
        
    }
})