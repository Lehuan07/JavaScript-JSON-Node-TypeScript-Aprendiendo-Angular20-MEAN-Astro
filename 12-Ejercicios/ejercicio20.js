
/*
Ejercicio 20:

En base al numero que ingresa el usuario,
decir si es par o impar
*/

let num = 0

do{
    num = parseInt(prompt("Ingrese un numero"));

}while(isNaN(num));

if(num%2==0){
    alert(`El ${num} es par`);
}else{
    alert(`El ${num} es impar`);
}