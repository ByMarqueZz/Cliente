// Ejercicio 1
let number = 0;

if (number%2==0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// Ejercicio 2
let edad3 = parseInt(prompt("Introduce tu edad"));

if (edad3 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Ejercicio 3
let edad2 = parseInt(prompt("Introduce tu edad"));
let localidad2 = prompt("Introduce tu localidad");

if (edad2 >= 26 && localidad2 == "Madrid") {
    console.log("Enhorabuena!!");
}

// Ejercicio 4
let numero = parseInt(prompt("Introduce un número"));

if (numero >= 100) {
    numero = numero - ((numero * 15) / 100);
}
console.log(numero);

// Ejercicio 6
let edad = parseInt(prompt("Introduce tu edad"));
let localidad = prompt("Introduce tu localidad");

if ((edad >= 18 && edad <= 30) && localidad == "Madrid") {
    console.log("Puede acceder al carnet de empresarios emprendedores");
}