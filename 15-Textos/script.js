
//FUNCIONES MAS IMPORTANTES:

//Longitud:

let nombre = "Nahuel Cejas";

document.write(`<h3>Contar caracteres</h3>
    Para contar cuantas letras tiene un texto se ultiliza .length <br>
    Ejemplo: Tu nombre tiene ${nombre.length} numeros de caracteres<br><br>`);

//Parsear numero a string

let numero = 1255;
let numeroLetra = numero.toString();
document.write(`<h3>Parsear numero a string</h3>
    Para convertir un numero en cadena de texto se tiene que setear con .toString() <br>
    Ejemplo: ${typeof numeroLetra} <br><br>`)

//Convertir texto a MAYUSCULAS

let web = "www.google.com";
let webMayuscula = web.toUpperCase();
document.write(`<h3>Convertir texto a MAYUSCULAS</h3>
    Para convertir una palabra en mayusculas (Util para comparar), se usa .toUpperCase(); <br>
    Ejemplo: ${webMayuscula} <br>
    Lo mismo en minusculas con .toLowerCase() <br><br>`)

//Conseguir una letra

let frase = "Soy un crack de Argentina";

document.write(`<h3>Conseguir una letra</h3>
    Para sacar una letra se utiliza chartAt(Mas la posicion de la letra que queremos sacar) <br>
    Ejemplo de la frase: Soy un crack de Argentina si ponemos en 16 encontraremos la A
    <br>
    Ejemplo: ${frase.charAt(16)} <br><br>`)

// Comprobar si una cadena tiene dentro otra

let eslogan = "No soy el mejor programador, pero seguramente si voy por el buen camino";

if(eslogan.includes("programador")){
    document.write(`<h3>Comprobar si una cadena tiene dentro otra</h3>
        Para saber si existe una palabra dentro de una frase, se utiliza el metodo .include()
        <br>
        Por ese caso sale este cartel, ya que lo estoy comparando con un if <br> <br><br>`)
}else{
    document.write("Esa palabra no existe")
}

//Buscar la posicion de una palabra:

let mensaje = "Estas aprendiendo JS como un autentico manija";

document.write(`Para encontrar la primer coincidencia de una palabra se usa indexOf 
y nos devuelve la posición, si no es así, nos devuelve -1 <br>
Ejemplo: ${mensaje.indexOf("autentico")} buscamos la palabra "autentico" <br><br>`);

//Extraer parte de un texto

let curso = "Master en JavaScript";
document.write(`<h3>Extraer parte de un texto</h3>
    Para cortar una frase se utiliza slice(), <br>
    ejemplo en la frase: Master en JavaScript. Lo cortamos en Master agregando curso.slice(0,6)<br>
    ${curso.slice(0,6)} <br><br>`)

//Remplazar parte de una cadena de texto:
let pelicula = "Tonto y retonto"

document.write(`<h3>Remplazar parte de una cadena de texto:</h3>
    Para cambiar parte de una cadena de texto se utiliza .remplace() <br>
    Ejemplo de frase: "Toto y retonto", voy a remplazar Tonto por Listo <br>
    ${pelicula.replace("Tonto", "Listo")} Tambien se puede utilizar.remplaceAll para cambiar todas las combinaciones posibles<br><br>`)

//Trim o eliminar espacios por delante y por detras de las cadenas de texto

let email ="   nahuel.cejas@htmail.com    ";

document.write(`<h3>Eliminar espacios por delante y por detras de las cadenas de texto</h3>
    Con el metodo .Trim() se eliminan los espacion por delante y por detras <br>
    muy utilizados para validar y guardar bases de datos. <br>
    ejemplo: "   nahuel.cejas@htmail.com    " con el trim() queda asi
    ${email.trim()}Sin Espacios <br><br>`)

//Separar cadenas por parte

let listaCompra = "Huevos,hamburguesas,bananas,pan,mayonesa,pollo";

let listaArray = listaCompra.split(",");

document.write(`<h3>Hacer una cadena array</h3>
    En este caso tenemos listaCompra = "Huevos,hamburguesas,bananas,pan,mayonesa,pollo" <br>
    entonces para hacerla array se utiliza let listaArray = listaCompra.split(",") <br>
    Cabe mencionar que en este caso la , es lo que separa cada palabra <br>
    Ejemplo de como queda: ${typeof listaArray}<br><br>`)


// Como saber cuando comienza con una palabra especifica

let fraseDos = "Bienvenido a mi canal de Youtube";

document.write(`<h3>Como saber cuando comienza con una palabra especifica</h3>
    Para saber eso se utiliza la funcion .startWith(y la palabra que queres buscar) <br>
    Ejemplo: fraseDos = "Bienvenido a mi canal de Youtube" y buscamos si empieza con Bienvenido <br>
    ${fraseDos.startsWith("Bienvenido")} <br>
    Para saber si acaba con una palabra es lo mismo pero se utiliza el .endWith()<br><br>`)

//Repetir palabras

let mensajito = "JavaScript ta gueno ta. ";

document.write(`<h3>Como repetir palabras</h3>
    En este caso si queremos repetir una frase se utiliza .repeat(+ numero de veces a repetir) <br>
    Ejemplo: let mensajito = "JavaScript ta gueno ta"; lo repetimos 3 veces <br>
    ${mensajito.repeat(3)}`);


//Buscar texto en una cadena:

let micadena = "Pablito clavó un clavito";

document.write(`<h3>Como repetir palabras</h3>
    Para hacer esto se utiliza .search("Mas palabra a buscar") <br>
    Ejemplo: let micadena = "Pablito clavó un clavito"; <br>
    ${micadena.search("clavó")} En este caso buscamos Clavó dandome la posición <br>
    Tambien se puede utilizar .match() devuelve un objeto mas completo`)

//