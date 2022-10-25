

function validarFormulario() {


    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo = /^\w+@(\w+\.)+\w{2,4}$/;


    var nombre = document.getElementById("fname");
    var apellidos = document.getElementById("lname");
    var correo = document.getElementById("email");
    var asunto = document.getElementById("asunto");
    var comentarios = document.getElementById("comentarios");
    
    //Campo nombre
    if (!nombre.value) {
        alert("El nombre es requerido");
        nombre.focus();
        return false;
    }
    if (!expRegNombre.exec(nombre.value)) {
        alert("El nombre admite letras y espacios.")
        nombre.focus();
        return false;
    }
    //Campo apellido
    if (!apellidos.value) {
        alert("El apellido es requerido");
        apellidos.focus();
        return false;
    }
    if (!expRegApellidos.exec(apellidos.value)) {
        alert("El apellido admite letras y espacios.")
        apellidos.focus();
        return false;
    }


    //campo email
    if (!correo.value) {
        alert("El correo es requerido");
        correo.focus();
        return false;
    }
    if (!expRegCorreo.exec(correo.value)) {
        alert("El correo no tiene el formato correcto.")
        correo.focus();
        return false;
    }
    // campo asunto
    if (!asunto.value) {
        alert("El asunto es requerido");
        asunto.focus();
        return false;
    }
    //campo comentarios
    if (!comentarios.value) {
        alert("El comentario es requerido");
        comentarios.focus();
        return false;
    }

    return true;
}

//asociacion del boton enviar con el formulario en html//

window.onload = function () {
    var input = document.getElementById("enviar");
    input.onclick = validarFormulario;
}