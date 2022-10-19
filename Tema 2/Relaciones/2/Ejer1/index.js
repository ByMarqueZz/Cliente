let min = parseInt(prompt("Introduce un valor"));
let max = parseInt(prompt("Introduce un valor"));

document.write(Math.random());

function random(min, max) {
    document.write(Math.floor((Math.random() * (max - min + 1)) + min));
}

document.write(random(100,200));
documen.write(random(min, max));