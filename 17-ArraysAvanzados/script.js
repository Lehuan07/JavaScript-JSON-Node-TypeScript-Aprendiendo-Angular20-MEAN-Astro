

let frameworks = ["Angular", "React", "Vue", "Astro", "Node", "Svelt", "SolidJS", "Qwick", "ExpressJS"];

//Accesos con bucles de manera basica
document.write("<ul>")
for(let i=0; i<frameworks.length; i++){
    document.write(`<li>${frameworks[i]} </li>`)
}
document.write("</ul>")

//Bucles para recorrer arrays como un pro.

document.write("*********************************");

let actores = ["Arnold Swaserneger", "Silvester Stallone", "Alpachino", "Robert De Niro", "Leonardo di Caprio", "Brad Pit"];

document.write("<h3>Listado de actores:</h3>");

document.write(`<h4>Con for off </h4>`);

document.write(`
    <strong>for(let actor of actores){<br>
        actor<br>
    )
} </strong><br><br>`)

for(let actor of actores){
    document.write(`
        ${actor} <br>`
    )
}



document.write(`<h4>For in</h4>`)

document.write(`<strong>
    for(let indice in actores){<br>    
        actores[indice]<br>
}</strong><br><br>`)

for(let indice in actores){
    document.write(`
        ${actores[indice]} <br>`)
}

//ForEach

document.write(`<h4>ForEach</h4>`);

document.write(`<strong>
    actores.forEach(actor => {<br>
    actor<br>
});
    </strong> <br><br>`)

actores.forEach(actor => {
    document.write(`${actor} <br>`)
});

//Bucle Map

document.write(`<h4>Map</h4>`);

document.write(`<strong>
    let dondeViven = actores.map(actor => {<br>
    actor <br>
    return actor + " Hollywood "<br>
});<br>
    document.write(dondeViven);
    </strong> <br><br>`)

let dondeViven = actores.map(actor => {
    document.write(`${actor} <br>`)
    return actor + " Hollywood "
});

document.write(dondeViven);

//Arrays multidimencionales

let categorias =["Estrategia", "Accion", "Deportes", "Surviver", "Aventuras"]
let titulos = ["Age of empires", "Call of duty", "Fifa", "Project Zomboid", "Zelda"];

let videojuegos = [categorias, titulos];
console.log(videojuegos)
console.log(videojuegos[1][4])
console.log(videojuegos[0][2])

//Arrays bidimensionales

let tabla = [
    ["Producto", "Cantidad", "Precio"],
    ["PC",            2,         500 ],
    ["Smartphone",    4,        200  ],
    ["Impresora",     10,       57   ]
];

console.table(tabla)
//console.log(tabla[2][0], tabla[2][2]);

document.write("<table border=1>")

tabla.forEach((fila, index) =>{

    document.write("<tr>");

    fila.forEach(columna=>{
        if(index===0){
            document.write("<th>" + columna + "</th>") 
        }else{
            document.write("<td>" + columna + "</td>") 
        }
        
    })
    document.write("</tr>")
})

document.write("</table>")

console.log("********************************")
//Arrays Tridimencional

let cartaRestaurante = [
    ["Plato", "Cantidad",    "Precio",              "Tamaño"],
    ["Pizza",     2,       [8, 10, 15], ["Pequeño", "Mediano", "Grande"]],
    ["Burger",    4,       [10, 12, 17], ["Pequeño", "Mediano", "Grande"]],
    ["Asado",     10,      [14, 18, 25], ["Pequeño", "Mediano", "Grande"]]  
];

for(let menu of cartaRestaurante){
    
    console.log("********************************")

    console.log(menu)

    if(Array.isArray(menu[2] && Array.isArray(menu[3]))){
        console.log(menu[0]);
        for(let index in menu[2]){
            console.log(menu[3][index], menu[2][index] + "Pesos")
        }
    }
    
    /*for(elemento of menu){
        
        if(Array.isArray(elemento)){
            for(let subElemento of elemento){
                console.log(subElemento);
            }
        }else{
            console.log(elemento)
        }
    }*/
}