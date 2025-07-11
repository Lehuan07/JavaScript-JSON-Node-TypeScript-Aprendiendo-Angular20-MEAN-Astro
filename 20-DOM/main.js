
//DOM = Document Object Model.

//GetElementById = Seleccionar elementos por su Identificador
let caja = document.getElementById("caja");

//Modificar caracteristicas de un elemento seleccionado:
caja.innerHTML = "<h2>Hola, soy Nahuel</h2>";
/*
caja.style.background = "lightblue";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
caja.style.textAlign = "center"
*/
caja.classList.add("cajita");

console.log(caja.className)