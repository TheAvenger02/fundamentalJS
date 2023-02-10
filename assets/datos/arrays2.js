/* let currencies = ['MXN', 'USD', 'EUR', 'CAD']
console.log(currencies);

let size = currencies.length;

let last = currencies[currencies.length - 1];

//Crear un nuevo valor en el arreglo
let new_length = currencies.push('JPY')
console.log(new_length, currencies);

//Agrega un valor al inicio de un arreglo
let add_init = currencies.unshift('NZD')

//Borra la última posición del arreglo
let delete_last_pos = currencies.pop()

//Borra valor de una posición específica
let delete_esp_pos = currencies.splice(1,1)

//Posición índice de una moneda
let currency_pos = currencies.indexOf('EUR');
console.log(currency_pos,currencies) */

let arr = []
let number1 = prompt('Escribe un número:')
arr.push(number1)
let number2 = prompt('Escribe un número:')
arr.push(number2)
let number3 = prompt('Escribe un número:')
arr.push(number3)
console.log('El primer número es: ' + arr[0])
console.log('El último número es: ' + arr[arr.length - 1])
let sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
console.log('La suma de tus números es: ' + sum)