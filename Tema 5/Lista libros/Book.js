class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
    getAllInfo(){
        return `${this.title}, ${this.author}, ${this.genre}`;
    }
}

class BookList {
    constructor() {
        this.books = [];
    }
    add(book) {
        this.books.push(book);
    }
    getBooks() {
        return this.books;
    }
}
export { BookList, Book };
