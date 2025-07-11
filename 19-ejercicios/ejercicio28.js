/*
Ejercicio 28:

1. Pide 6 números por pantalla y mételos en un array  
2. Muestra el array entero (todos sus elementos)  
en el cuerpo de la página y en la consola  
3. Ordénalo y muéstralo  
4. Invierte su orden y muéstralo  
5. Muestra cuántos elementos tiene el array  
6. Busca uno de los valores que ha metido el usuario,  
que nos diga si lo encuentra y su índice  
7. Refactoriza todo lo posible usando funciones
*/
// 1. Función para pedir 6 números y devolver un array
function pedirNumeros() {
    let numeros = [];
    while (numeros.length < 6) {
        let entrada = parseInt(prompt(`Ingresá un número (${numeros.length + 1}/6):`));
        if (!isNaN(entrada)) {
            numeros.push(entrada);
        } else {
            alert("Eso no es un número válido. Intente de nuevo.");
        }
    }
    return numeros;
}

// 2. Función para mostrar el array en consola y en la web
function mostrarArray(arr, texto = "Elementos del array:") {
    console.log(`${texto}`, arr);
    document.write(`<strong>${texto}</strong> <br> ${arr.join(", ")} <br><br>`);
}

// 3. Función para ordenar un array
function ordenarArray(arr) {
    return [...arr].sort((a, b) => a - b);
}

// 4. Función para invertir un array
function invertirArray(arr) {
    return [...arr].reverse();
}

// 5. Función para contar elementos
function contarElementos(arr) {
    return arr.length;
}

// 6. Función para buscar un número y mostrar su índice si existe
function buscarNumero(arr) {
    let numeroBuscado = parseInt(prompt("Ingrese el número que desea buscar:"));
    let indice = arr.indexOf(numeroBuscado);

    if (indice !== -1) {
        alert(`✅ El número ${numeroBuscado} se encuentra en el array en la posición ${indice}`);
        document.write(`✅ El número ${numeroBuscado} se encuentra en la posición ${indice} del array.<br><br>`);
    } else {
        alert(`❌ El número ${numeroBuscado} no está en el array`);
        document.write(`❌ El número ${numeroBuscado} no se encuentra en el array.<br><br>`);
    }
}

// Ejecución del programa
let misNumeros = pedirNumeros();

mostrarArray(misNumeros, "1. Números ingresados:");
mostrarArray(ordenarArray(misNumeros), "2. Números ordenados:");
mostrarArray(invertirArray(misNumeros), "3. Números en orden invertido:");
document.write(`4. El array tiene ${contarElementos(misNumeros)} elementos. <br><br>`);

buscarNumero(misNumeros);


