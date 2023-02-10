/* const type_payment = 'cash'
switch(type_payment){
    case 'cash':
        document.write('Tipo de pago con efectivo');
    break;
    case 'cc':
        document.write('Tipo de pago con tarjeta de crédito');
    break;
    default:
        document.write('Sin tipo de pago');
        break;
}
*/
let edad = prompt('¿Cuál es su edad?',0);
switch(edad){
    case '0':
        document.write('Recién nacido');
    break;
    case '18':
        document.write('Ya eres mayor de edad');
    break;
    case '68':
        document.write('Edad de jubilación');
    break;
    default:
        document.write('No definida');
    break;
}