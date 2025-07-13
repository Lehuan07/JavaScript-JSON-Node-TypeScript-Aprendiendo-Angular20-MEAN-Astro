
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

//!Input

let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", function(){
    console.log("El usuario escribio " + this.value)
})

//!Change

let selecGenero = document.querySelector("#genero");

selecGenero.addEventListener("change", ()=>{
    console.warn("Seleccionaste ah " + selecGenero.value)

})


//!Focus

let campoEmail = document.querySelector("#email");

campoEmail.addEventListener("focus", () =>{
    console.log("Mira como me concentro cuando me apretas")

    campoEmail.style.border = "5px solid red"
})

//!Blur

campoEmail.addEventListener("blur", function(){
    console.log("Por que me abandonas?")
    campoEmail.style.border = "1px solid gray"
})

//!change

campoEmail.addEventListener("change", function(){
    console.log("Me activo cuando cambio y te salis")
})

//*Eventos Ventana

//! Scroll

window.addEventListener("scroll", () => {
    console.log("¡Estás scrolleando!");
});

//! Resize

window.addEventListener("resize", () => {
    console.log("Redimensionaste la ventana");
});

//*Eventos PortaPapeles

//!Copy

let portaPapeles = document.querySelector("#portaPapeles")

portaPapeles.addEventListener("copy", () =>{
    alert("Que copiaaa?")
    navigator.clipboard.writeText("")
})

//!Paste

portaPapeles.addEventListener("paste", function() {
    alert("Pegaste el texto como un pro")
})

//!Cut

portaPapeles.addEventListener("cut", ()=>{
    alert("Cuidado con las tijeras, me vas a cortar!")
})



//* Dejar de escuchar click
//!Remove (en este caso evento click)

function alertita(){
    alert("Botoncito2Activado")

}

let botoncito2 = document.querySelector("#botoncito2");
botoncito2.addEventListener("click", alertita)

setTimeout(() =>{
    botoncito2.removeEventListener("click", alertita)
    alert("Botoncito2Desactivado")
}, 5000);

//* Propagacion de eventos, burbugeo o publing

let cajaPadre = document.querySelector("#cajaPadre");
let botonHijo = document.querySelector("#botonHijo");

cajaPadre.addEventListener("click", () =>{
    alert("Tocaste el elemento PADRE!")
})

botonHijo.addEventListener("click", function(event){
    event.stopPropagation();
    alert("Tocaste el elemento hijo")
})

