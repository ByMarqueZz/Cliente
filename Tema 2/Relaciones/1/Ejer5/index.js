let fecha = new Date();

function reloj() {
    document.open();
    fecha = new Date();
    document.write(fecha.getHours()+":");
    document.write(fecha.getMinutes()+":");
    document.write(fecha.getSeconds()+"<br>");
    if (fecha.getSeconds() == 0) {
        clearInterval(intervalo);
    }
}

var intervalo = setInterval(reloj, 1000);