import { Note } from './classes/Note.js';
import { ColecctionNotes } from './classes/ColecctionNotes.js';
window.onload = function () {
    var coleccion = new ColecctionNotes();
    let inputButton = document.getElementById("inputButton");
    coleccion.getNotes();
    coleccion.showNotes();
    coleccion.chekedAll();
    deleteAll(coleccion);
    priorityAll(coleccion);
    totalNotes(coleccion);
    inputButton.addEventListener("click", function () {
        let inputText = document.getElementById("inputText")
        let nota = new Note(inputText.value);
        inputText.value = "";
        coleccion.addNotes(nota);
        document.getElementById("notes").innerHTML = "";
        coleccion.showNotes();
        coleccion.chekedAll();
        deleteAll(coleccion);
        priorityAll(coleccion);
        totalNotes(coleccion);
    });
}
function deleteAll(coleccion) {
    let notes = document.getElementsByClassName('note__delete--button');
    for (let i=0; i<notes.length; i++) {
        notes[i].addEventListener('click', function () {
            let id = this.id;
            coleccion.delete(id);
            this.parentNode.parentNode.parentNode.remove();
        });
    }
}
function priorityAll(coleccion) {
    let priority = document.querySelectorAll('.note__priority--button');
    for (let i=0; i<priority.length; i++) {
        priority[i].addEventListener('click', function () {
            let id = this.id;
            for (let j=0; j<priority.length; j++) {
                priority[j].className = 'note__priority--button';
            }
            this.className = 'note__priority--button--' + this.value.toLowerCase();
            coleccion.changePriority(id, this.value);
            document.getElementById("notes").innerHTML = "";
            coleccion.showNotes();
            coleccion.chekedAll();
            deleteAll(coleccion);
            priorityAll(coleccion);
            totalNotes(coleccion);
        });
    }
}
function totalNotes(coleccion) {
    let pendientes = document.getElementById("pendientes");
    let totales = document.getElementById("totales");
    totales.innerHTML = coleccion.notes.length;
    let contador = 0;
    for (let i=0; i<coleccion.notes.length; i++) {
        if (coleccion.notes[i].checked == true) {
            contador++;
        }
    }
    pendientes.innerHTML = contador;
}