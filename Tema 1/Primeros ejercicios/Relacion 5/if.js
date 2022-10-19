// Ejercicio 3
let edad = parseInt(prompt("Introduce tu edad"));

if (edad < 5) {
    console.log("Eres del jardín de infancia");
} else if (edad >= 6 && edad <= 11) {
    console.log("Eres de primaria");
} else if (edad >= 12 && edad <= 16) {
    console.log("Eres de la ESO");
} else if (edad >= 17 && edad <= 21) {
    console.log("Eres de ciclos");
} else if (edad > 21) {
    console.log("Eres de la universidad");
}

// Ejercicio 5
let examen = parseInt(prompt("Introduce el primer examen"));
let examen2 = parseInt(prompt("Introduce el segundo examen"));
let trabajo = parseInt(prompt("Introduce el primer trabajo"));
let trabajo2 = parseInt(prompt("Introduce el segundo trabajo"));

let mediaExamenes = ((examen + examen2) / 2);
let mediaTrabajos = ((trabajo + trabajo2) / 2);

let media = ((mediaExamenes * 75) / 100 ) + ((mediaTrabajos * 25 ) / 100 );

if (media >= 5 && mediaExamenes >= 4.5 && mediaTrabajos >= 4.5) {
    console.log("Enhorabuena has aprobado!!");
} else {
    console.log("Pues has suspendido");
}
console.log(media);