
//Condicional switch
let miDesayuno = "te";

switch(miDesayuno){
    case "cafe": 
        console.log("Elegiste cafe con leche")
        break;
    case "huevos":
        console.log("Elegiste huevos fritos con baecon")
        break;
    case "te":
        console.log("Elegiste un tesuli")
        break;
        
    default:
        console.log("Justo de ese desayuno no me queda")
}

//Condicional ternario

let nombre = "Juan Pablo";
let edad = 17;

let resultado = (edad >= 18) ? "Es mayor de edad": "No es mayor de edad";
console.log(resultado)

//Diferencia entre var y let (alcance / bloque)



if("Hola" == "Hola"){
    var curso = "Master en React";
    curso = "Hola, bienvenido al curso";
}

console.log(curso);