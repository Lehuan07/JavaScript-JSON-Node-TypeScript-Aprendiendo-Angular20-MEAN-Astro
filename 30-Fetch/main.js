//Fetch es hacer peticiones a ajax.
//Es decir a servidores o servicios externos.


//Hacer peticiones a la api

let idUser = 6

fetch("https://jsonplaceholder.typicode.com/users/"+idUser)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        mostrarUsuario(data)
    })
    .catch(error =>{
        console.log("Ups, algo raro paso", error)
    })

function mostrarUsuario(user){
    let usuario = document.querySelector("#user")

    usuario.innerHTML = `
    ${user.name}
    `
}

