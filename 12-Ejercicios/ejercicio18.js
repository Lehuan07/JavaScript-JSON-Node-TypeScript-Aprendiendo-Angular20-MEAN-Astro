

/*
Ejercicio 18:

Tenemos una cadena de numeros del 1 al 17
Y el usuario tiene que adivinar cual es el elegido
Hace un programa para que pueda adivinar el numero
*/


const adivinanza = 7;
let ingreseNumero = 0;
let validar = false;
do{
ingreseNumero = parseInt(prompt("Ingrese un numero a ver si adivinas"));

    if(ingreseNumero !== adivinanza){
        alert("segui participando");
    }
    else{
        validar = true;
    }

}
while(validar !== true);

alert("La pegaste en el ojosky");


