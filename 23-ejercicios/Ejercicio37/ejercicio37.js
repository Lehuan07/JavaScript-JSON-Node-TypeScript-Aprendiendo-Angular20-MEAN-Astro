/*
Ejercicio 37:
    1. Crea un formulario con estos campos: Nombre, Apellidos y edad
    2. Añade un botón de enviar y usa el evento submit
    3. Muestra los datos por pantalla cuando se termine de enviar el form
*/

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");
let boton = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", (event)=>{
    event.preventDefault();
    let nombreImpreso = nombre.value;
    let apellidoImpreso =apellido.value;
    let edadImpresa = edad.value;
    if(!nombre.value || !apellido.value || !edad.value){
        alert("complete todos los campos")
        return;
    }

    parrafo.innerHTML = `
                        Se acaba de registrar como ${nombreImpreso} ${apellidoImpreso} <br>
                        y su edad es de ${edadImpresa}. <br>
                        Bienvenido y que disfrute de nuestros servicios!`

    nombre.value = "";
    apellido.value = "";
    edad.value = "";
})