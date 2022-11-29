import { Note } from './classes/Note.js';
import { ColecctionNotes } from './classes/ColecctionNotes.js';
window.onload = function () {
    var coleccion = new ColecctionNotes();
    let inputButton = document.getElementById("inputButton");
    inputButton.addEventListener("click", function () {
        let inputText = document.getElementById("inputText")
        let nota = new Note(inputText.value);
        inputText.value = "";
        coleccion.addNotes(nota);
        // console.log(coleccion.getNotes());
        showNotes();
    });
}
function showNotes() {
    divPrincipal = document.getElementById("notes").innerHTML = "";
    // let notes = coleccion.getNotes();
}
