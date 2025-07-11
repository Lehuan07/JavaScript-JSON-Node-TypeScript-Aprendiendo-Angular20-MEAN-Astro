
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

//GetElementByClassName - Seleccion multiple
/*
let articulos = document.getElementsByClassName("article");
    

for(let i = 0; i<articulos.length; i++){

    articulos[i].classList.add("articuloBase");

    if(i===0){
        articulos[i].classList.add("articuloAmarillo")
    }

        if(i=== (articulos.length-1)){
        articulos[i].classList.add("articuloNegro")
        articulos[i].innerHTML = "<h2>Mira mas aca!</h2>"
    }
    //articulos[i].innerHTML += "<a href='#'>Ver más</a>";
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = "Ver más";
    articulos[i].appendChild(link);
}
*/
//getElementByTagName

let etiquetasArticulos = document.getElementsByTagName("article")

etiquetasArticulos[2].style.background = "green"
etiquetasArticulos[2].style.color = "#fff"

//Recomendable: QueriSelector

let seccionArticulos = document.querySelector("#section")
//seccionArticulos.style.background = "grey"
seccionArticulos.innerHTML += "<h2>Articulo</h2>"
seccionArticulos.style.padding = "20px"

//QuerySelector class

let primerArticulo = document.querySelector(".article");
primerArticulo.style.borderRadius = "10px"

//Recomendable: QuerySelectorAll

let articulos = document.querySelectorAll(".article");

articulos.forEach((articulo, i) => {
    articulo.classList.add("articuloBase");

    if (i === 0) {
        articulo.classList.add("articuloAmarillo");
    }

    if (i === articulos.length - 1) {
        articulo.classList.add("articuloNegro");
        articulo.innerHTML = "<h2>Mira mas aca!</h2>";
    }

    let link = document.createElement("a");
    link.href = "#";
    link.textContent = "Ver más";
    articulo.appendChild(link);
});

const tarjeta = document.querySelector("#tarjeta");

tarjeta.textContent = "Contenido nuevo de la tarjeta";
tarjeta.innerHTML = "<strong>Contenido de mi tarjeta</strong>";

tarjeta.setAttribute("data-id", 12);
tarjeta.classList.add("destacar2");
tarjeta.classList.remove("destacar");
tarjeta.classList.remove("remodelar");
tarjeta.classList.toggle("small");

const titular = document.createElement("h2");
titular.textContent = "Esta es la tarjeta";
tarjeta.append(titular);

tarjeta.insertBefore(titular, tarjeta.firstChild);

//tarjeta.querySelector("strong").remove();
