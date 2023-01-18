/*
let number_1 = 20
let number_2 = 30.5
let number_3 = 0.45
let number_4 = -30

let resultado;
//Operaciones básicas (suma, resta, multiplicación y división)
resultado = number_1 + number_2
resultado = number_1 - number_2
resultado = number_1 * number_2
resultado = number_1 / number_2

let pi = Math.PI;
pi = Math.round(pi)
console.log(pi)
document.write(pi)
//Raíz cuadrada
let raiz = Math.sqrt(144)
console.log(raiz)
//Valor absoluto
resultado = Math.abs(-500)
console.log(resultado)
//Número elevado a una potencia
resultado = Math.pow(5,3)
console.log(resultado)
resultado = Math.min(-87,-1,2,4,5,7)
console.log(resultado)
*/
let p1 = prompt('Ingresa el valor de una prenda:')
let p2 = prompt('Ingresa el valor de otra prenda:')
let p3 = prompt('Ingresa el valor de otra prenda:')
let resultado = Number(p1) + Number(p2) + Number(p3)
console.log(resultado)
document.write("El costo de las prendas es: $" + resultado)
document.write('</br>')
//Subtotal 20%
let subtotal = resultado - (resultado*0.2)
console.log(subtotal)
document.write("El subtotal es: $" + subtotal)
document.write('</br>')
//IVA
let IVA = (subtotal*0.16)
console.log(IVA)
document.write("IVA: $" + IVA)
document.write('</br>')
let total = subtotal + IVA
console.log(total)
document.write("Total: $" + total)
document.write('</br>')