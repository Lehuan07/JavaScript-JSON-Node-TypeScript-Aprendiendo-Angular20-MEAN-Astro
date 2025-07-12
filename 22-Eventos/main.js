
//Eventos son las cosas que suceden cuando estas en la web. 
//Los eventos escuchan lo que pasa en la web y en base a eso, hace lo que le pedimos.



//* Eventos de raton
//!Click

let botoncito = document.querySelector("#botoncito");
botoncito.addEventListener("click", (event) => {
    alert("Asi que sos vivo vo? Que andas molestando")
    console.log(event)
})

//!Doble click:

let dobleCLick = document.querySelector("#botonDoble");

dobleCLick.addEventListener("dblclick", function(){
    alert("Diste doble click, asi me gusta obediente")
})

//!Mouse over //Pasar por arriba de un elemento

let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", function(){
    console.log("No me vez, pero estoy aca oculto")
})

//!Mouseout
cajaTexto.addEventListener("mouseout", function(){
    console.log("Saliste de la caja de texto")
})

//!MouseMove

cajaTexto.addEventListener("mousemove", () =>{
    console.error("Tetas moviendo dentro de la text area")
})


//*Eventos teclado

//!Keydown

let campoTexto = document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", function(event){
    console.log("Precionaste la tecla: " + event.key)
})

//!KeyUp

campoTexto.addEventListener("keyup", (event) =>{
    console.warn("Soltaste la tecla " + event.key)
})

//!KeyPress

campoTexto.addEventListener("keypress", function(event){
    console.error("Apretaste la tecla " + event.key)
})


//*Eventos de formulario

//!Submit:

let superFormulario = document.querySelector("#superFormulario");

superFormulario.addEventListener("submit", (event) =>{

    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value;
    alert(nombre)
    alert(correo)
    alert(genero)
});