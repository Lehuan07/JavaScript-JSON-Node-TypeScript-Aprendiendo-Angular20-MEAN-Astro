/*
Mostrar todos los numeros impares que hay entre
2 numeros que nos de el usuario*/

let num1 = parseInt(prompt("Ingrese el primer numero"));

let num2 = parseInt(prompt("Ingrese el numero divisor"));

while(num1 < num2){
    num1++;
    if(num1 % 2 != 0){
        console.log(`El ${num1} es impar`);
    }
};