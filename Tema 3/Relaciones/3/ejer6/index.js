function separarFrase(frase) {
    // Primero le quitamos los espacios a la frase
    let arrayPrincipal = [];
    let frase2 = frase.split(" ").join("");
    // Luego averiguamos cuantas filas y columnas
    // va a tener nuestro cuadrado
    let vecesRepite = Math.ceil(Math.sqrt(frase2.length));
    let o = 0;
    // Separamos la cadena sin espacios entre el numero de columnas
    // y lo añadimos al array la cantidad de filas que haya
    for (i=0; i<vecesRepite; i++) {
        arrayPrincipal.push(frase2.slice(o, o+vecesRepite));
        o+=vecesRepite;
    }
    return arrayPrincipal;
}


function codificar(mensaje) {
    let array = separarFrase(mensaje);
    let arrayDefinitivo = []
    // Cogemos los caracter de todas las columnas
    // y lo añadimos al array
    for (i=0; i<array.length; i++) {
        for (o=0; o<array.length; o++) {
            if(!array[o][i] == '') {
                arrayDefinitivo.push(array[o][i]);
            }
        }
    }
    for (u of arrayDefinitivo) {
        document.write(u);
    }
}

codificar('Tengo Mucho Sueño');
document.write("<br>");
codificar('have a nice day');

// codificar('Lucas has visto lo rapido que soy nah de locos me aburro mucho esto funciona a ver si da un pete');
