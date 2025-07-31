
/*
Las promesas son como hacer una llamada de celular, esta puede estar
libre y te atiende enseguida, ocupada y te deja en espera, o rechazada*/

let miPromesa = new Promise((resolve, reject) => {
    let correcto = true;

    if(correcto){
        let miObjeto = {
            nombre : "Cities Skyrim",
            categoria : "Cities Building",
            anio : 2022
        }
        resolve(miObjeto);
    } else {
        reject("No se cumplió la promesa");
    }
});

miPromesa
    .then(resultado => {
        console.log(resultado); // Esto muestra el "resolve"
    })
    .catch(error => {
        console.error(error); // Esto muestra el "reject" si correcto es false
    });


//Promesas encadenadas

function servirPizza(){

    return new Promise(resolve =>{
        setTimeout(() => resolve("Pizza Servida"), 15000);
    })
}

function servirHamburguesa(){

        return new Promise(resolve =>{
        setTimeout(() => resolve("Hamburguesa Servida"), 8000);
    })
}

function servirMilanesa(){

        return new Promise(resolve =>{
        setTimeout(() => resolve("Milanesa Servida"), 12000);
    })
}

/*
servirPizza()
    .then(resultado1=>{
        console.log(resultado1)

        return servirHamburguesa();
    })
    .then(resultado2 => {
        console.log(resultado2)

        return servirMilanesa()
    })
    .then(resultado3 =>{
        console.log(resultado3)
    })
    .catch(error => {
        console.log("Error en las comandas: ", error)
    })
*/



//? Async y await

async function servirPlatos() {

    try{
    let resultado1 = await servirPizza();
    if(resultado1 != "Pizzeta"){
        throw new Error("La piza no salio bien, no es lo que queria el cliente")
    }else{
        console.log(resultado1);

    }

    let resultado2 = await servirHamburguesa();
    console.log(resultado2);

    let resultado3 = await servirMilanesa();
    console.log(resultado3);
    }
    catch(error){
        console.error("Hubo un error: ", error)
    }
}


servirPlatos()