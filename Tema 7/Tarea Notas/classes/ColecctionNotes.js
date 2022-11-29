class ColecctionNotes {
    constructor() {
        this.notes = [];
    }
    addNotes(note) {
        note.id = this.notes.length;
        this.notes.push(note);
    }
    delete(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
    getNotes() {
        return this.notes;
    }
}
export { ColecctionNotes };