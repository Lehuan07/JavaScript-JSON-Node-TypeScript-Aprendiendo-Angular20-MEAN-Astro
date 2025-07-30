
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