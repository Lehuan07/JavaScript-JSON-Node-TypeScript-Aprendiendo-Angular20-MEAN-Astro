
//BOM browser object model


//Alertas y dialogos
/*
alert("Hola abuela, desde donde estes")

prompt("Como se llama la abuelosky?")

confirm("Tu abuela tiene mas de 70 años?")
*/

//Objeto Window

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.outerHeight);
console.log(window.outerHeight);

console.log(window.closed);
console.log(window.document)
console.log(window.navigator.userAgent)
console.log(window.scrollX, window.scrollY)

//Navigator
console.log(navigator.appName, navigator.appVersion)

if(!navigator.onLine){
    alert("No tenes internet macho")
}
else(
    console.log("Estas en linea")
)

//Location

console.log(location.href)
console.log(location.hostname);

//location.href="https://google.com"

//location.reload;

//Historial

history.back();
history.forward();

history.go(7);
console.log(history.length);


//Screen

console.log(screen.width, screen.height);

//Ventanas emergentes o PopUps

let miweb = window.open("https://google.com", 
                        "Ir a google",
                        "width = 750, heigth= 300",
                        "left=552, top= 50");