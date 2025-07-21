//Programacion orientada a objetos


//*Molde
class Gato{

    constructor(nombre, raza, color){
        //*Propiedades o atributos (caracteristicas)
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    //*Metodos (acciones)
    maullar(){
        console.log(`El gato ${this.nombre}, dice Miau cuando tiene hambre`)
    }

    saltar(){
        console.log(`El gato ${this.nombre} ha saltado`)
    }

    getRaza(){
        return this.raza
    }

    setRaza(raza){
        this.raza = raza
    }
    
    set guardarColor(color){
        this.color = color
    }

    get sacarColor(){
        return this.color
    }

    //?Metodos estaticos

    static saludar(){
        alert("Hola amigo, miau miau")
    }

}

let miGato = new Gato("Bella", "Abisinio", "Marron");

miGato.setRaza("Persa")

console.log(miGato.getRaza());

miGato.maullar();

miGato.guardarColor = "Negro";

console.log(miGato.sacarColor) 

Gato.saludar();


let miGato2 = new Gato("Paco", "de la clle", "Vaca");

console.log(miGato2.nombre);

miGato2.maullar();


//? Herencias

class GatoEspecial extends Gato{

    constructor(nombre, raza, color, habilidad){
        super(nombre, raza, color);
        this.habilidad = habilidad;
    }

    setHabilidad(habilidad){
        this.habilidad = habilidad;
    }
    
    getHabilidad(){
        return this.habilidad
    }

    ejecutarHabilidad(){
        console.log(`${this.nombre}, esta utilizando su habidildad de ${this.habilidad}, para ayudar a su dueño`)
    }
}

let superGato = new GatoEspecial("Max", "Japonesa", "blanco", "Super atrapador de lauchas");

superGato.ejecutarHabilidad();

superGato.saltar()