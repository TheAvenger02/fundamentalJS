//Imprimir los números del 1 al 10

/* for(let i=0; i = 10; i++){
    document.write(i);
    document.write("<br>")
}

const enterprises = ['TESLA','AMAZON','MICROSOFT','META']
console.warn('FOR TRADICIONAL')
for(let i=0;i<enterprises.length;i++){
    console.log(enterprise[i])
}
console.warn('FOR IN')
for(let i in enterprise){
    console.log(enterprise[i])
}
console.warn('FOR OF')
for(let enterprise of enterprises){
    console.log(enterprise)
}
*/
let level = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5', 'Nivel 6']
for(let i=1;i<=6;i++){
    document.write('<h'+i+'>' + 'Encabezado de ' + level[i-1] + '</h'+i+'>')
}
