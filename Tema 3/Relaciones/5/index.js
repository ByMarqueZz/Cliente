class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = Date.now();
    }
}


class BookList {
    constructor(books_read, books_not_read, reference_next, reference_last, reference_current) {
        this.books_read = books_read;
        this.books_not_read = books_not_read;
        this.reference_next = reference_next;
        this.reference_last = reference_last;
        this.reference_current = reference_current;
        this.array_books = [];
    }

    add(book) {
        this.array_books.push(book);
        this.books_not_read += 1;
    }

    finishCurrentBook() {
        this.reference_current.read = true;
        for (let i=0; i<this.array_books.length; i++) {
            if (this.array_books[i].title == this.reference_current.title) {
                this.array_books[i].read = true;
            }
        }
        this.reference_current.read_date = Date.now();
        this.reference_last = this.reference_current;
        this.reference_current = this.reference_next;
        for (let i=0; i<this.array_books.length; i++) {
            if (this.array_books[i].read == false) {
                this.reference_next = this.array_books[i];
                break;
            }
        }
    }
}

libro1 = new Book('50 sombras', 'Romantico', 'Yo');
libro2 = new Book('Harry Potter', 'Accion', 'Yo');
libro3 = new Book('Caperucita Roja', 'Cuento infantil', 'Yo');
libro4 = new Book('Spiderman', 'Accion', 'Yo');

lista = new BookList(0, 0, libro1, libro1, libro2);
lista.add(libro3);
lista.add(libro4);