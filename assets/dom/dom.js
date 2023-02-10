/*
//Busca un elemento HTML por el ID
let serie_1 = document.getElementById("serie_1");

serie_1.innerHTML = "ESTO ES UNA CAJA SERIE DESDE JS";
serie_1.style.background = "red";
serie_1.style.color = "white";

console.log(serie_1);

let serie_2;
serie_2 = document.getElementsByClassName('card');
for(let i=0; i<serie_2.length;i++){
    console.log(serie_2[i]);
    serie_2[i].style.background = "blue";
    serie_2[i].style.background = "white";
}
*/

let document = document.querySelector('#serie_1');

let series = {
    serie_1: {name: 'Serie 1', descripcion: 'Descripción 1'},
    serie_2: {name: 'Serie 2', descripcion: 'Descripción 2'}
}

let all_cards = document.querySelectorAll('.card');
for(let i=0; i<all_cards.length;i++){
    let card = all_cards[i];
    console.log(card.querySelector('.card-title'))

    let card_title = card.querySelector('.card-title')
    let card_text = card.querySelector('.card-text')

    if(series['serie_'+i] !== undefined)
    card_title.innerHTML = series['serie_'+i].name
    card_text.innerText = series['serie_'+i].descripcion
}