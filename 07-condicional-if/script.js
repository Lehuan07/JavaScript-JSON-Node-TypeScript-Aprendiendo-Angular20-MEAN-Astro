
//Condicional if

//Si a es == a b, hace algo y viceversa.

//Ejemplo 1

let estaLloviendo = false;

if(estaLloviendo){
    console.log("Lleva paraguas pichon")
}
else{
    console.log("No llueve, llevante lentes de sol cancheros")
}

//Ejemplo 2:


let conCebolla = false;

if(!conCebolla){
    console.log("Ok, sin cebolla entonces");
}
else{
    console.log("Tu hamburguesa tiene cebolla entonces")
}

//Ejemplo 3

let nombre = "Joaquin Perez"
let edad = 35;

if(edad >= 18){
    console.log("Podes inscribirte");
    if(edad <= 20){
        console.log("sos un pichon")
    }
    else if (edad>=70){
        console.log("Tas viejo papi")
    }
    else{
        console.log("Ya sos un adulto")
    }
}
else{
    console.log("No sos mayor de edad")
}