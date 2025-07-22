/*
¡¡¡ SUPER EJERCICIO DE JAVASCRIPT !!!

Crea una aplicación web en la que puedas añadir, mostrar y eliminar
tus películas favoritas.

Cada peli que guardes debe tener:

- Título de la película  
- Fecha de guardado  
- Puntuación de popularidad (un valor aleatorio entre 1 y 100).

Las películas deben mantenerse guardadas aunque se recargue la página,
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento.

Tareas:
- Ejercicio 39: Crea el formulario necesario  
- Ejercicio 40: Función para guardar películas con los datos necesarios  
- Ejercicio 41: Función para mostrar películas extraídas del LocalStorage  
- Ejercicio 42: Haz que las películas carguen automáticamente al abrir la web.  
- Ejercicio 43: Función para eliminar películas.
*/



let formulario = document.querySelector("#formulario");
let peliculaIngresada = document.querySelector("#pelicula");
let cuerpoTabla = document.querySelector("#cuerpoTabla");

class PeliculaLista {
    constructor(pelicula, fecha, puntuacion) {
    this.pelicula = pelicula;
    this.fecha = fecha;
    this.puntuacion = puntuacion;
    }
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let titulo = peliculaIngresada.value.trim();

    if (!titulo) {
    alert("Por favor, ingrese una película.");
    return;
}

    let fecha = new Date().toLocaleString(); // mejor mostrarlo formateado
    let puntuacion = Math.floor(Math.random() * 100) + 1;

    let nuevaPeli = new PeliculaLista(titulo, fecha, puntuacion);

    let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

    let yaExiste = peliculas.some(
    (peli) => peli.pelicula.trim().toLowerCase() === titulo.trim().toLowerCase()
);

    if (yaExiste) {
        alert("Esa película ya está en tu lista.");
        peliculaIngresada.value = "";
        return;
    }

    peliculas.push(nuevaPeli);

    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    peliculaIngresada.value = ""; // limpiar input
    renderizarPeliculas();
});

function renderizarPeliculas() {
cuerpoTabla.innerHTML = "";

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

peliculas.forEach((pelicula, index) => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
            <td>${pelicula.pelicula}</td>
            <td>${pelicula.fecha}</td>
            <td>${pelicula.puntuacion}</td>
            <td><button class="eliminar" data-index="${index}">Eliminar</button></td>
        `;

    cuerpoTabla.appendChild(fila);
});

  // Activar botón de eliminar
document.querySelectorAll(".eliminar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
    let index = e.target.getAttribute("data-index");
    eliminarPelicula(index);
    });
});
}

function eliminarPelicula(index) {
    let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
    peliculas.splice(index, 1);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    renderizarPeliculas();
}

// Mostrar al cargar la página
renderizarPeliculas();
