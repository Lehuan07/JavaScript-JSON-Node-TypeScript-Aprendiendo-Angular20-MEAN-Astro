/*
Ejercicio 34:

Crea un programa que abra una nueva ventana con una web,
pero en diferentes tamaños.

Haz que el usuario pueda elegir entre tres tamaños (pequeño, mediano y grande).
*/


let ventanaChica = document.querySelector("#ventanapequenia");
let ventanaMediana = document.querySelector("#ventanamediana");
let ventanaGrande = document.querySelector("#ventanagrande");


ventanaChica.addEventListener("click", ()=>{
    window.open("http://www.google.com",
        "Ir a google", "width=400,height=150,left=202,top=50"
    )
})

ventanaMediana.addEventListener("click", function(){
    window.open("https://developer.mozilla.org", "Ir a developer", "width=800,height= 600,left=1000, top=200")
})

ventanaGrande.addEventListener("click",()=>{
    window.open("https://css-tricks.com", "Ir a tricks", "width=1850,height= 900,left=0, top=00")
})