let fecha = new Date();
let i = 60;

function reloj() {
    document.write(i+"<br>");
    if (i > 0) {
        setTimeout(reloj, 1000);
    } else {
        location.reload();
    }
    i--;
}

setTimeout(reloj, 1000);