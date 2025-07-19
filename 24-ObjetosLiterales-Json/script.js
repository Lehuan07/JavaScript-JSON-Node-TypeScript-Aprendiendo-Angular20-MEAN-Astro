//Objetos literales
//!Es una lista de caracteristicas de algo.
//!Es una estructura de datos que agrupa propiedades y metodos
//!Bajo un mismo nombre

let pelicula ={
    Titulo: "Terminator",
    anio: 1984,
    genero: "Ciencia ficcion",
    director: "James Cameron",
    protagonista: "Arnold Schwarzeneger",
    elenco: ["Arnold", "Linda Hammilton", "Kanew", "Resto"],
    detalles: {
        duracion: 120,
        pegi: 18,
    },
    descripcion: function(){
        return `${this.Titulo} es una pelicula del genero de ${this.genero}.
        Creada el ${this.anio}. Protagonizada por ${this.protagonista}
        Y dirigida por ${this.director}`
    },
    mostrarElenco: () =>{
        console.log("Elenco de actores:");

        pelicula.elenco.forEach(nombre => {
        console.log(nombre)
        });
    }
};

//Primera forma de acceder a un objeto
console.log(pelicula.protagonista);
console.log(pelicula)
console.log(pelicula.descripcion())

//Segunda forma de acceder a un objeto
console.log(pelicula["director"])

//Cambiar variables
pelicula.director = "Nahuel Cejas"
console.log(pelicula.director);

//Agregar variables

pelicula.secuela = "Terminator 2: El juicio final"

console.log(pelicula)


pelicula.mostrarElenco()
console.log(pelicula.detalles.duracion)

//Eliminar propiedad del objeto
delete pelicula.genero;
console.log(pelicula.genero)

//Objetos Json


