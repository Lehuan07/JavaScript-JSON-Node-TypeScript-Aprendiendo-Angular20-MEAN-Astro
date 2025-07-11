/*
Ejercicio 29:

Crea una funcion que reciba una palabra y devuelva
cuantas vocales tiene.
*/

function contarVocales(palabra){
        let contador = 0;
        const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
        for(let i = 0; i< palabra.length; i++){
            if(vocales.includes(palabra[i])){
                contador++;
            }
        }
        if(contador === 0){
            alert("La palabra no contiene vocales.");
            return;
        }
        return contador;
}

let cuentaVocales = prompt("Ingrese una palabra para contar sus vocales:");
let resultado = contarVocales(cuentaVocales);
if(typeof resultado === "number"){
    alert(`La palabra "${cuentaVocales}" tiene ${resultado} vocales.`);
}