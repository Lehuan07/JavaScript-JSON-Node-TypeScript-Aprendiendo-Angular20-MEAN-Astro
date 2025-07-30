//Fetch es hacer peticiones a ajax.
//Es decir a servidores o servicios externos.


//Hacer peticiones a la api

let idUser = 6

//Sacar datos de un backend de manera asincrona
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
    ${user.name} <br>
    ${user.username}
    `
}

//Guardar informacion

const usuarioParaGuardar = {
    name: "Nahuel Cejas",
    username: "nahuel_cejas"
}

fetch("https://jsonplaceholder.typicode.com/users/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(usuarioParaGuardar)
})

.then(response => response.json())
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error);
})



//Sintaxis de promesas con async y await

async function sacarUsuarios() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        // Obtenemos el div donde vamos a mostrar los usuarios
        let contenedor = document.querySelector("#userList");

        // Limpiamos el contenido anterior, por si acaso
        contenedor.innerHTML = "";

        // Recorremos los usuarios y los mostramos
        data.forEach(user => {
            contenedor.innerHTML += `
                <div>
                    <strong>Nombre:</strong> ${user.name}<br>
                    <strong>Usuario:</strong> ${user.username}<br>
                    <strong>Email:</strong> ${user.email}
                    <hr>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}

sacarUsuarios();
