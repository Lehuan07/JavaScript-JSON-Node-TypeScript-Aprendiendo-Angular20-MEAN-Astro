
//FUNCIONES agrupa una serie de instrucciones, para poder usarlas varias veces
// se utiliza para: 
// reutilizacion de codigo
// Modulidad
// evita repeticion de codigo

function saludos(nombre ="Amalia", plato = "Tortillas"){
    console.log("Hola abuelosky " + nombre);
    console.log("Como estas?");
    console.log("Me pasas la receta de " + plato);

    return "abuela Saludada";
}

/*
for(let i=0; i<10; i++){

    saludos();
}
    */
let mensajeFinal = saludos();
saludos("Miguela");
//alert(saludos());

//Funcion dentro de otras

function operaciones(numero1, numero2){
    let resultados = {
        "Suma": (numero1+numero2),
        "Resta": (numero1-numero2),
        "Multiplicacion": (numero1*numero2),
        "Division": (numero1/numero2),
    };
    return resultados;
}

function porConsola(num1, num2){

    let resultados = operaciones(num1, num2)
    console.log("suma " + resultados.Suma);
    console.log("resta " + resultados.Resta);
    console.log("multiplicacion " + resultados.Multiplicacion);
    console.log("division " + resultados.Division);

    return true;
}

function porPantalla(num1, num2){
    let resultados = operaciones(num1, num2);
    document.write("suma " +resultados.Suma + "</br>");
    document.write("resta " +resultados.Resta + "</br>");
    document.write("multiplicacion " +resultados.Multiplicacion + "</br>");
    document.write("division " + resultados.Division + "</br>");

}
function calculadora(num1, num2, mostrar = false){
    if(mostrar == false){
        porConsola(num1, num2);
    }
    else{
        porPantalla(num1, num2);
    }

    

    return true;
}

calculadora(7,9);

calculadora(7,12, true);

//Parametros ...REST

function misPeliculas(pelicula1, Pelicula2, ...restoPeliculas){
    console.log("**********REST Y SPREAD*************");
    console.log(pelicula1);
    console.log(Pelicula2);
    console.log(...restoPeliculas);
}

misPeliculas("Wall-e", "Matrix", "Terminator 2", "Jurasic Park", "Advengers", "Ironman");

//Operador SPREAD

let numeros = [
    1, 2, 3, 4
];

let misNumeros = [
    ...numeros, 5, 6, 7, 8, 9
];

document.write(misNumeros);

let misPelisFav = ["Wall-e", "Matrix"]

misPeliculas(...misPelisFav, "Toy story 1", "Tor", "Sexo en la loma"); 
