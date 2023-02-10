class Perro{
    constructor(nombre){
        this.nombre = nombre;
    }
    //Método
    hablar(){
        document.write(this.nombre + " ladra");
    }
    alimentar(){
        document.write("Hola soy Mascota " + this.nombre + " ¡¡Gracias por alimentarme!!");
    }
}

let mascota_1 = new Perro('Pancho');
mascota_1.hablar(); //Pancho ladra
document.write("<br>")
mascota_1.alimentar();
document.write("<br>")
let mascota_2 = new Perro('Kika');
mascota_2.hablar(); //Kika ladra
document.write("<br>")
mascota_2.alimentar();

function calculo(x) { return (x*x); }