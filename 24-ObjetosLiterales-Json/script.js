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

/*JSON significa JavaScript Objet Notation.
Y es un formato de texto para estructurar datos y es muy importante
para la comunicacion de datos entre servidores y clientes en la web*/
//!Es una forma de guardar o enviar objetos en formato de texto

let palaDePadel ={
    Titulo: "Metalbone",
    marca: "Adidas",
    anio: 2002,
    peso: 347,
    forma: "Diamante",
    dureza: "Media"
}

console.log(palaDePadel);

let palaDePadelJSON = JSON.stringify(palaDePadel);

console.log(palaDePadelJSON);

let objetoConvertido = JSON.parse(palaDePadelJSON);

console.log(objetoConvertido);

//*Recorrer un objeto

let caja = document.querySelector("#datos");

for(let clave in palaDePadel){
    caja.innerHTML += `<p>${clave}: ${palaDePadel[clave]}</p>`

}