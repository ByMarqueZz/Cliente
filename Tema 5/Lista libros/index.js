import { Book, BookList} from "./Book.js";

function pintarLibros(bookList) {
    let lista = document.getElementById('list');
    lista.innerHTML = "";
    let libros = bookList.getBooks();
    for (let libro of libros) {
        let div = document.createElement("div");
        div.className = 'libros';
        div.innerHTML = libro.getAllInfo();
        lista.appendChild(div);
    }
}
function addBook(bookList) {
    let title = document.getElementById("titulo").value;
    let author = document.getElementById("autor").value;
    let genre = document.getElementById("genero").value;
    if (title != "" && author != "" && genre != "") {
        let book = new Book(title, author, genre);
        bookList.add(book);
        pintarLibros(bookList);
    }
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
}
function changeView() {
    // cambia de lista a grid
    let lista = document.getElementById('list');
    let libros = lista.getElementsByClassName('libros');
    for (let libro of libros) {
        libro.classList.toggle('grid');
    }
}
function changeViewList(){
    let lista = document.getElementById('list');
    let libros = lista.getElementsByClassName('libros');
    for (let libro of libros) {
        libro.classList.remove('grid');
    }
}

window.onload = function () {
    let bookList = new BookList();
    let button = document.getElementById("addButton");
    let listaButton = document.getElementById("buttonLista");
    let cuadradoButton = document.getElementById("buttonCuadrado");
    button.addEventListener("click", function () {
        addBook(bookList);
    });
    listaButton.addEventListener("click", function () {
        changeViewList();
    });
    cuadradoButton.addEventListener("click", function () {
        changeView();
    });
}