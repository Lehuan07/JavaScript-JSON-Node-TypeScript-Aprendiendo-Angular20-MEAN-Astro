
/*
Bucle while:
            Es una logica que se repite una condicion.
*/

//Ejemplo:

let year = 1990;

let objetivo = 2017;
let seTerminoElMundo = 2000;

while(year < objetivo){

    if(year === seTerminoElMundo){
        break;
    }
    year++;
    console.log("Estamos en el año " + year);
}

/*
Do while:
    La accion que queres repetir se ejecuta al menos 1 vez.
    Incluso si no se cumple la condicion
*/

let numero = 47;

do{
    console.log(numero);
    numero --;
}while(numero > 0){
}