
//?Local storage
//!Es un almacen de datos en el navegador

//*Comprobar disponibilidad

if(typeof(Storage) !== undefined){
    console.log("Local storage ready")
}else{
    alert("No anda el Local Storage")
}

//*Guardar datos

localStorage.setItem("Curso", "Java Script desde 0")
localStorage.setItem("Link", "www.cursosgratis.com")

//*Recuperar datos del local Storage

document.querySelector("#curso").textContent=localStorage.getItem("Curso");
document.querySelector("#web").innerHTML = localStorage.getItem("Link");

//*Guardar objeto

let animal = {
    especie: "Elefante",
    nombre: "Trompita",
    color: "gris"
}

localStorage.setItem("animal", JSON.stringify(animal))

//*Recuperar Objeto

let animalJS = JSON.parse(localStorage.getItem("animal"))

console.log(animalJS)

//*Eliminar elementos

localStorage.removeItem("animal");
console.log(localStorage)

//*Vaciar Storage

document.querySelector("#vaciar").addEventListener("click", () => {
    localStorage.clear();
})