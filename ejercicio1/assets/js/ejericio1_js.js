//Ejercicio 1

//Estableciendo Id dentro del DOM
const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");


// Estableciendo clases de errores y resultado
const errorN = document.querySelector(".errorNombre");
const errorA = document.querySelector(".errorAsunto")
const errorM = document.querySelector(".errorMensaje")
const resultado = document.querySelector(".resultado");


//Estableciendo expresion regular
const regExp = /[a-zA-Z]/;
const regExp2 = /\D/

//Creando el evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    limpiar()
    validandoVariables()
})

//Validando variables según función de validacion
const validandoVariables = () => {
    let valido = true

    if (nombre.value == "" || regExp.test(nombre.value) == false) {
        errorN.innerHTML = "El nombre es requerido."
        valido = false

    }
    if (asunto.value == "" || regExp.test(asunto.value) == false) {
        errorA.innerHTML = "El asunto es requerido."
        valido = false

    }
    if (mensaje.value == "" || regExp.test(mensaje.value) == false) {
        errorM.innerHTML = "El mensaje es requerido."
        valido = false

    } 
    if (valido == false) {
        return false
    }

 resultado.innerHTML = "Mensaje enviado con éxito!!!"
}

const limpiar = () => {
    errorN.innerHTML = ""
    errorA.innerHTML = ""
    errorM.innerHTML = ""
    resultado.innerHTML = ""
}