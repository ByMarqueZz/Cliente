function invierteCadena(cad_arg) {
    return cad_arg.split("").reverse().join(""); 
}

function inviertePalabras(cad_arg) {
    return cad_arg.split(" ").reverse().join(" ");
}

function encuentraPalabraMasLarga(cad_arg) {
    let array = cad_arg.split(" ");
    let cadenaMasLarga = 0;
    for (palabra of array) {
        if (palabra.length > cadenaMasLarga) {
            cadenaMasLarga = palabra.length;
        }
    }
    return cadenaMasLarga;
}

function filtraPalabraMasLarga(cad_arg, i) {
    let array = cad_arg.split(" ");
    let cadenaMasLarga = 0;
    for (palabra of array) {
        if (palabra.length > i) {
            cadenaMasLarga++;
        }
    }
    return cadenaMasLarga;
}

function cadenaBienFormada(cad_arg) {
    let mayus = cad_arg.slice(0,1);
    let minus = cad_arg.slice(1);
    return mayus.toUpperCase() + minus.toLowerCase();
}

document.write(invierteCadena("Hola"));
document.write("<br>");
document.write(inviertePalabras("Maria del carmen"));
document.write("<br>");
document.write(encuentraPalabraMasLarga("Maria del carmen"));
document.write("<br>");
document.write(filtraPalabraMasLarga("Maria del carmen", 4));
document.write("<br>");
document.write(cadenaBienFormada("mARIA DEL CARMEN"));