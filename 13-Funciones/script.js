
//FUNCIONES agrupa una serie de instrucciones, para poder usarlas varias veces
// se utiliza para: 
// reutilizacion de codigo
// Modulidad
// evita repeticion de codigo

function saludos(nombre, plato){
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
let mensajeFinal = saludos("Nolberta", "Papaya assadas")
saludos("Miguela", "Pastas")
//alert(saludos());