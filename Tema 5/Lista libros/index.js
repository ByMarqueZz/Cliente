import { ListaLibros, Libro} from "./libro.js";

function pintarLibros(bookList) {
    let lista = document.getElementById('list');
    lista.innerHTML = "";
    for (let libro of bookList.libros) {
        let div = document.createElement("div");
        div.className = 'libros';
        div.innerHTML = `${libro.titulo}, ${libro.autor}, ${libro.genero}`;
        lista.appendChild(div);
    }
}
function addBook(bookList) {
    let title = document.getElementById("titulo").value;
    let author = document.getElementById("autor").value;
    let genre = document.getElementById("genero").value;
    if (title != "" && author != "" && genre != "") {
        let book = new Libro(title, author, genre);
        bookList.añadirLibro(book);
        pintarLibros(bookList);
    }
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
}

window.onload = function () {
    let bookList = new ListaLibros();
    let button = document.getElementById("addButton");
    button.addEventListener("click", function () {
        addBook(bookList);
    });
}