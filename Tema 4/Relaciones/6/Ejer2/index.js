// getCookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// setCookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
window.onload = function() {
    btnColorParrafo = document.getElementById("colorParrafo");
    btnTamañoMas = document.getElementById("tamañoMas");
    btnTamañoMenos = document.getElementById("tamañoMenos");

    btnColorParrafo.addEventListener("click", function(){
        // array con todos los colores
        var colores = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black"];
        // obtener color aleatorio
        var color = colores[Math.floor(Math.random() * colores.length)];
        setCookie("colorParrafo", color, 1);
        document.getElementById("h1").style.backgroundColor = color;
    });
    btnTamañoMas.addEventListener("click", function(){
        // aumentar el tamaño del h1
        var tamaño = parseInt(window.getComputedStyle(document.getElementById("h1")).getPropertyValue("font-size"));
        tamaño += 1;
        setCookie("tamañoParrafo", tamaño, 1);
        document.getElementById("h1").style.fontSize = tamaño + "px";
    });
    btnTamañoMenos.addEventListener("click", function(){
        // disminuir el tamaño del h1
        var tamaño = parseInt(window.getComputedStyle(document.getElementById("h1")).getPropertyValue("font-size"));
        tamaño -= 1;
        setCookie("tamañoParrafo", tamaño, 1);
        document.getElementById("h1").style.fontSize = tamaño + "px";
    });
}