import { Book, BookList} from "./Book.js";

function pintarLibros(bookList) {
    let lista = document.getElementById('list');
    lista.innerHTML = "";
    let libros = bookList.getBooks();
    for (let libro of libros) {
        let div = document.createElement("div");
        div.innerHTML = libro.getAllInfo();
        lista.appendChild(div);
    }
}
function addBook(bookList) {
    let title = document.getElementById("titulo").value;
    let author = document.getElementById("autor").value;
    let genre = document.getElementById("genero").value;
    bookList.add(new Book(title, author, genre));
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
    pintarLibros(bookList);
}

window.onload = function () {
    let bookList = new BookList();
    let button = document.getElementById("addButton");
    button.addEventListener("click", function () {
        addBook(bookList);
    });
}