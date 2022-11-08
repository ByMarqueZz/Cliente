// Mostrar una imagen junto a dos botones para pasar a la siguiente foto y a la anterior.
window.onload = function() {
    var btnAnterior = document.getElementById("anterior");
    var btnSiguiente = document.getElementById("siguiente");

    btnAnterior.addEventListener("click", anterior);
    btnSiguiente.addEventListener("click", siguiente);

    function anterior() {
        var imagen = document.getElementById("imagen");
        var src = imagen.getAttribute("src");
        var num = parseInt(src.substr(6, 1));
        if (num == 1) {
            num = 4;
        } else {
            num--;
        }
        imagen.setAttribute("src", "./img/" + num + ".jpg");
    }

    function siguiente() {
        var imagen = document.getElementById("imagen");
        var src = imagen.getAttribute("src");
        var num = parseInt(src.substr(6, 1));
        if (num == 4) {
            num = 1;
        } else {
            num++;
        }
        imagen.setAttribute("src", "./img/" + num + ".jpg");
    }
}