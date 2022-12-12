class Note {
    constructor(title, priority='') {
        this.title = title;
        this.priority = priority;
        this.checked = false;
        this.date = new Date();
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
}
export { Note };