/*
Ejercicio 8:
Tengo una heladeria y cada bola cuesta 1.8 euros.
¿Cuanto cuesta los cucuruchos de 1, 2 y 3 bolas?
Ten en cuenta que el barquillo cuesta 0.5e
*/

let precio = 1.8;
let barquillo = 0.5;
let cucUna = precio+barquillo;
let cucuDos = (precio*2)+barquillo;
let cucuTres = (precio*3)+barquillo;

console.log(`Sabiendo que el precio de cada bola de helado es de ${precio} y tiene un costo agregado de ${barquillo} proveniente del barquillo, podemos deducir que, el precio de cada cucurucho es de:
    1 bola: ${cucUna}
    2 bola: ${cucuDos}
    3 bola: ${cucuTres}`)