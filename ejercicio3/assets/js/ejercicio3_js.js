// estableciendo id del DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");


const btnSuma = document.getElementById("btn-sumar");
const btnResta = document.getElementById("btn-restar");

const resultado = document.querySelector(".resultado");

//Validando Regex
const regExp = /\d/g


//sumando, restando e imprimiendo
let sumando = () => {
    if (valor1.value == "" || regExp.test(valor1.value)) {
        resultado.innerHTML = "Uno de los números no es un número o está vacío"
        
    } if (valor2.value == "" || regExp.test(valor2.value)) {
        resultado.innerHTML = "Uno de los números no es un número o está vacío"
        
    } else{
        var resultadoSuma = parseInt(valor1.value) + parseInt(valor2.value)
        resultado.innerHTML = resultadoSuma
    }
    
}

let restando = () => {
    if (valor1.value == "" || regExp.test(valor1.value)) {
        resultado.innerHTML = "Uno de los números no es un número o está vacío"

    } if (valor2.value == "" || regExp.test(valor2.value)) {
        resultado.innerHTML = "Uno de los números no es un número o está vacío"

    } if ((parseInt(valor1.value) - parseInt(valor2.value)) <= 0){
       resultado.innerHTML = 0

    } else {
        var resultadoResta = parseInt(valor1.value) - parseInt(valor2.value)
        resultado.innerHTML = resultadoResta
    }

}

//agregando addEventListener a los botones
btnSuma.addEventListener("click", sumando)
btnResta.addEventListener("click", restando)


