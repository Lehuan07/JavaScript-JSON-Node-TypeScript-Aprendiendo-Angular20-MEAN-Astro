
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

//Ejemplo 4

let buenTiempo = true;

if(buenTiempo){
    console.log("Nos vamos al parque");
}
else{
    console.log("Nos quedamos en casa")
}

//Ejemplo 5

let year = 2007;

if(year >= 2000 && year <=2030){
    console.log("Estamos en la era moderna")
}
else if(year > 2030){
    console.log("Estamos en la era Post Moderna")
}
else{
    console.log("Estas en la era antigua")
}

//Ejemplo 6

if(year == 2007 || year == 2017 || year == 2027 || year == 2027){
    console.log("El año acaba en 7")
}else{
    console.log("Año desconocido")
}