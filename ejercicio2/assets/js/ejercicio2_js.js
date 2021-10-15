// Estableciendo id del DOM en variables
 const btn1 = document.getElementById("btn-1");
 const btn2 = document.getElementById("btn-2");
 const btn3 = document.getElementById("btn-3");
 const btn4 = document.getElementById("btn-4");
 const btn5 = document.getElementById("btn-5");
 const btn6 = document.getElementById("btn-6");
 const caja = document.getElementById("caja")


 //Agregando evento de click
 btn1.addEventListener("click" , function colorCaja(){
    if (caja.style.backgroundColor != btn1.style.backgroundColor) {
        caja.style.backgroundColor = "#e53e3e"
    } else {
        caja.style.backgroundColor = "#fff"
    }
    
 })

 btn2.addEventListener("click" , function colorCaja(){
    if (caja.style.backgroundColor != btn2.style.backgroundColor) {
        caja.style.backgroundColor = "#dd6b20"
    } else {
        caja.style.backgroundColor = "#fff"
    
    }
 })

 btn3.addEventListener("click" , function colorCaja(){
    if (caja.style.backgroundColor != btn3.style.backgroundColor) {
        caja.style.backgroundColor = "#faf089"
    } else {
        caja.style.backgroundColor = "#fff"
    }
    
 })

 btn4.addEventListener("click" , function colorCaja(){
    if (caja.style.backgroundColor != btn4.style.backgroundColor) {
        caja.style.backgroundColor = "#48bb78"
    } else {
        caja.style.backgroundColor = "#fff"
    }
    
 })

 btn5.addEventListener("click" , function colorCaja(){
    if (caja.style.backgroundColor != btn5.style.backgroundColor) {
        caja.style.backgroundColor = "#81e6d9"
    } else {
        caja.style.backgroundColor = "#fff"
    }
    
 })

 btn6.addEventListener("click" , function colorCaja(){
    if (caja.style.backgroundColor != btn6.style.backgroundColor) {
        caja.style.backgroundColor = "#d53f8c"
    } else {
        caja.style.backgroundColor = "#fff"
    }
    
 })