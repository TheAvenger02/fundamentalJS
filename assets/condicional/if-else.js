let calificacion = prompt('¿Cuál es su calificación?',0);
//Condición (si nota )
if(calificacion >= 0 && calificacion < 6){
    document.write('Reprobado');
}else if(calificacion > 6 && calificacion < 8){
    document.write('Aprobado con condicional');
}else if(calificacion > 8 && calificacion <= 10){
    document.write('Aprobado');
}else if(calificacion < 0 && calificacion > 10){
        document.write('Calificación no válida');
}else{
    document.write('Dígito no válido');
}

/*
document.write('<br>')
let num = 100
if(num === '100'){
    document.write(No son iguales);
} else{
    document.write(No son iguales);
}
*/
/*
const money = 1000;
let retiro = 100;
let actual = 0;
if(retiro<= money){
    document.write('Saldo suficiente');
    document.write('<br>')
    actual = money-retiro;
    document.write('Su nuevo saldo es de: $' + actual);
} else{
    document.write('Saldo insuficiente');
}
document.write('<br>')
retiro <= money ? document.write('Es posible retirar') : document.write('No es posible retirar')
*/

/*
const dinero = 1000
let retirar = prompt('¿Cuánto dinero deseas retirar?',0);
if(retirar >= dinero) {
    document.write('No cuentas con dinero suficiente para retirar')
}else if(retirar >= 0 && retirar < 1000){
    document.write('Se puede realizar el retiro')
}else if(retirar >= 5000){
    document.write('No se permite retirar más de 5k diarios')
}else{

}
*/
