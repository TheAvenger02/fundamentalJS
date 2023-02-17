document.addEventListener("keydown", callBack);

function callBack(evt){
    if(evt.keyCode === 65){alert("You pressed this key: 'a'");
        return;
    }else{
        console.log(evt.keyCode)
        console.log(String.fromCharCode(evt.which))
    }
}

document.addEventListener("keydown", listaEventos);

function listaEventos(evt){
    document.getElementById('eventKey').innerHTML = evt.key;
    document.getElementById('eventCode').innerHTML = evt.code;
    document.getElementById('eventKeyCode').innerHTML = evt.keyCode;
    document.getElementById('eventWhich').innerHTML = evt.which;
    document.getElementById('fromCharCode').innerHTML = String.fromCharCode(evt.keyCode);
}