import { Note } from './classes/Note.js';
import { ColecctionNotes } from './classes/ColecctionNotes.js';
window.onload = function () {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                pendientes: 0,
                listaNotas: [],
            }
        },
        methods: {
            addNote() {
                
            }
        },
        computed: {
            calcularTotales() {
                return 0;
            }
        }
    }).mount('#app')
}