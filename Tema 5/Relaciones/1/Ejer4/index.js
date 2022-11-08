// añade a una lista otro elemento
function añadir() {
    var lista = document.getElementById("lista");
    var texto = document.getElementById("input").value;
    var elemento = document.createElement("li");
    elemento.innerHTML = texto;
    lista.appendChild(elemento);
    var texto = document.getElementById("input").value = '';
}