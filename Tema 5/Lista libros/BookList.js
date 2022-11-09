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
export { BookList };