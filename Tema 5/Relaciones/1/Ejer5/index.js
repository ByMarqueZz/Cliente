// añade un input type file
function añadir() {
    var lista = document.getElementById("lista");
    var elemento = document.createElement("input");
    elemento.type = "file";
    lista.appendChild(elemento);
}