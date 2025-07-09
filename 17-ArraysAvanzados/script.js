

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

