let Auto = {
    marca: "FORD",
    modelo: "F-150",
    anio: 2023,
    encender: function(){
        console.log("El auto está encendido");
    },
    apagar: function(){
        console.log("El auto está apagado");
    }
};

console.log(Auto.modelo); // "F-150"
Auto.apagar(); //"El auto está apagado"

let goat = {
    name: "Michael Jordan",
    team: "Chicago",
    number: 23,
    shoot_2: function(){
        console.log("Anotaste 2 puntos");
    },
    shoot_3: function(){
        console.log("Anotaste 3 puntos");
    }
};