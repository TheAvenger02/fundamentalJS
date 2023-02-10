function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email=="123" && password=="456"){
        alert("Sesión iniciada");

        let boton = document.getElementById('btnLogin');
        boton.className = "btn btn-success";
        boton.innerHTML = 'Bienvenido: ' + email
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('login'));
        modal.hide();

    }else{
        alert("Usuario/Contraseña incorrecto");
    }
}