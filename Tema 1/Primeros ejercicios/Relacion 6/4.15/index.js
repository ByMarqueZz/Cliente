let adivinado = false;
let numero = parseInt(prompt("Introduce un número"));

while (adivinado == false) {
    let num = parseInt(prompt("Intenta adivinarlo"));
    if (num == numero) {
        console.log("ENHORABUENA LO HAS ADIVINADO!");
        adivinado = true;
    }
    if (num < numero) {
        console.log("El número a adivinar es mayor");
    } else if (num > numero) {
        console.log("El número a adivinar es menor");
    }
}