/* function square(number){
    return number * number;
} */

function saludar(){
    document.writeln('Saludar');
}

function saludar_nombre(nombre){
    console.log(arguments);
    document.writeln('<br>')
    document.writeln('Hola '+nombre+', ¿cómo estás?')
}

saludar();
saludar_nombre('Emilio','Murillo',123)

//Funciones de flecha
let saludar_flecha = (nombre) =>{
    document.writeln('<br>')
    document.writeln('Saludar desde la función flecha, '+nombre)
}
saludar_flecha('Emilio');

let fecha = new Date();
let hora = fecha.getHours();

function valida_hora(hora){
    if(hora >= 0 && hora <= 5){
        document.writeln('Buenas madrugadas')
    }else if(hora > 5 && hora <12){
        document.writeln('Buenos días')
    }else if(hora >= 12 && hora <= 8){
        document.writeln('Buenas tardes')
    }else if(hora >= 8 && hora < 0){
        document.writeln('Buenas noches')
    }
}
valida_hora();