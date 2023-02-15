for(let i=0; i < document.querySelectorAll('.card').length; i++) {
    //Tomo cada carta
    let card = document.querySelectorAll('.card')[i];
    card.addEventListener('click', function(){
        for(let i=0; i < document.querySelectorAll('.card').length; i++) {
            document.querySelectorAll('.card')[i].style.border = '';
        }
    card.style.border = "10px solid blue";
    });
}