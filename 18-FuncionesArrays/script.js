
//Crear un array

let dispositivos = ["pc", "laptop", "Tablet", "celular", "Smartwatch"];

console.log(dispositivos);

//Añadir elementos a un array

dispositivos.push("PS5");
dispositivos.push("Tostadora");
console.log(dispositivos);

//Eliminar elementos a un array

dispositivos.pop();
console.log(dispositivos);

//Agregar elementos al principio

dispositivos.unshift("PS4");
dispositivos.unshift("Psp");
console.log(dispositivos);

//Eliminar el primer elemento de un array

dispositivos.shift();
console.log(dispositivos);

//Busqueda devuelve indice

let indice = dispositivos.indexOf("laptop");
console.log(dispositivos);

//Busqueda para saber si exite el elemento

let existe = dispositivos.includes("PS4");
console.log(existe);

//filtrar Arrays
let dispositivosConA = dispositivos.filter(dispositivos => dispositivos.includes("a"));

console.log(dispositivosConA)

//Reducir

let reducir = dispositivos.reduce((total, actual) => total + ", " + actual.toLocaleUpperCase());
console.log(reducir);

let numeros = [10, 28, 39, 44];

let suma = numeros.reduce((acumulador, numeroActual, iteraciones) => acumulador+numeroActual);
console.log(suma);

//Ordenar
dispositivos.push("Batidora");
dispositivos.sort();
console.log(dispositivos);

//Invertir el orden
dispositivos.reverse();
console.log(dispositivos);


//Combinar arrays
let union = dispositivos.concat(numeros);
console.log(union);

//Convertir en cadena con separador

let etiquetas = dispositivos.join(", ");
console.log(etiquetas);

//Copiar porcion de array
let misGadgetsFavs = dispositivos.slice(3,5);
console.log(misGadgetsFavs);

//Busquedas con condicion

let buscar = dispositivos.find(dispositivo => dispositivo.length > 7);
console.log(buscar);

//BUsca igual pero devuelve el indice

let buscarIndice = dispositivos.findIndex(dispositivo => dispositivo.length > 7);
console.log(buscarIndice);

//Some
let letrasE = dispositivos.some(dispositivo => dispositivo.includes("e"));
console.log(letrasE);

//Every
let letrasA = dispositivos.every(dispositivo => dispositivo.includes("a"));
console.log(letrasA);

//Aplanar

let anios = [
    [1990, 1991, 1992],
    [2000, 2001, 2002],
    [2010, 2011, 2012, [2020, 2022, 2024, [2028, 2030, 2040]]]
]

let plana = anios.flat(3)
console.log(plana);

//CopyWithin

let fechas = ["01-01-1991", "02-02-1992", "03-03-1993", "04-04-1994", "05-05-1995"];

fechas.copyWithin(0,3);
console.log(fechas);

//Convertir string en array

let nombre = "Nahuel";
let arrayString = Array.from(nombre);
console.log(arrayString);

//Desestructuracion

let [uno, dos, tres] = [1, 2, 3];

console.log(tres);

let [actor, ...restoActores] = ["Robert de niro", "Robert Pattison", "Bruce Will", "Keanu reeaves"]
console.log(restoActores);

//Expandir arrays

let array1 = [1,2,3]
let array2 = [4,5,6]
let arrayCompleto =[...array1, ...array2];
console.log(arrayCompleto);

//De array a string

console.log(dispositivos.toString());

//De string a Array

let frase = "Bienvenidos, que paso? adonde estas?"

let arregloPalabras = frase.split(" ");
console.log(arregloPalabras);

//Pasar a seo slug

let slug = arregloPalabras.join("-").toLowerCase();
console.log(slug);