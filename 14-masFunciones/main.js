

//Funciones anonimas

const saludos = function(nombre = ""){
    console.log("Hola " + nombre + " Como estas?");
};

saludos();

//Cuando vale la pena utilizarlas?
//FUnciones de callback
//Se pasan como parametros de otra funcion.

/*
let veces = 0;

setInterval(function(){
    veces++;
    console.log("Se ejecuto el TimeOut " + veces+ " veces");
}, 1000);
*/

setTimeout(function(){
    saludos("Perico");
}, 1000)

//FUnciones de callback Avanzadas

function restame(num1, num2, mostrar, multiplicar){
    let resta = num1 - num2;
    mostrar(resta);
    multiplicar(resta);

    return resta;
}

restame(20,5, function(resultado){
    console.log(resultado);
},
function(resultado){
    console.log(resultado*3)
})

//Ambitos variables (Scope)

//Global

let web = "www.udemy.com";

function mostrarWeb(){
    console.warn(web);
    let nombre = "Nahuel"
    console.log(nombre);
}

mostrarWeb();

if(true){
    let deporte = "Mi deporte favorito es el Voley"
    console.log(deporte);
}

//console.log(deporte);

//Hoisting o elevacion.
console.log(coche);

var coche = "Agile"



let moto = "Honda c4";
console.log(moto)

//Funciones de flecha:

//Definirla
let nuevoCurso = horas =>{
    console.log("200 proyectos de como hacer pizas con html " + horas)
}

nuevoCurso(12);

//Callback

setTimeout(()=>{
    console.log("Estoy usando una funcion de flecha")
}, 2000);