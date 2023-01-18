let currencies = ['MXN', 'USD', 'EUR', 'CAD']
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
console.log(currency_pos,currencies)
