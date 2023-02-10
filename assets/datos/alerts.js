//Bloque la ejecución del navegador web
alert('hola mundo');

//Nos permite recibir valor e introducir a una variable
let nombre = prompt('¿Cómo te llamas?')
console.log(nombre) // ´´, null

//Nos permite interactuar con respuestas de usuario
const valor = confirm('¿Seguro que te llamas: '+nombre+'?')
console.log(valor) // 'true, false