console.log('Hola Mundo');

//Función saludar
function funcionSaludar(name, last_name){ //'n/d' si no se proporciona el parámetro
    return `Hola ${name} ${last_name}` //Backtick $ para concatener
}
console.log(funcionSaludar('Emilio','Murillo'));

//Función flecha
const saludarFlecha =(name) => {
    return `¡Hola ${name}, buen día!` //Backtick $ para concatener
}
console.log(saludarFlecha('Emilio'));