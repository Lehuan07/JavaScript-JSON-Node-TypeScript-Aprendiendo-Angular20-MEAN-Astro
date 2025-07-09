
//FUNCIONES MAS IMPORTANTES:

//Longitud:

let nombre = "Nahuel Cejas";

document.write("Tu numero tiene "+ nombre.length + " numeros de caracteres");

//Parsear numero a string

let numero = 1255;
let numeroLetra = numero.toString();
document.write(`Para convertir un numero en cadena de texto se tiene que setear con .toString() <br>
    Ejemplo: ${typeof numeroLetra}`)

//Convertir texto a MAYUSCULAS

let web = "www.google.com";
let webMayuscula = web.toUpperCase();
document.write(`Para convertir una palabra en mayusculas (Util para comparar), se usa .toUpperCase(); <br>
    Ejemplo: ${webMayuscula} <br>
    Lo mismo en minusculas con .toLowerCase()`)

//Conseguir una letra

let frase = "Soy un crack de Argentina";

document.write(`Para sacar una letra se utiliza chartAt(Mas la posicion de la letra que queremos sacar)
    <br>
    Ejemplo: ${frase.charAt(16)}`)

// Comprobar si una cadena tiene dentro otra

let eslogan = "No soy el mejor programador, pero seguramente si voy por el buen camino";

if(eslogan.includes("programador")){
    document.write(`Para saber si existe una palabra dentro de una frase, se utiliza el metodo .include()
        <br>
        Por ese caso sale este cartel, ya que lo estoy comparando con un if`)
}else{
    document.write("Esa palabra no existe")
}