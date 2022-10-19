function unaFuncion(cadena, subcadena) {
    let array = cadena.split(" ");
    let contador = 0;
    for (palabra of array) {
        if (palabra === subcadena) {
            contador++;
        }
    }
    return contador;
}

document.write(unaFuncion("lucas bla bla bla bla lucas lucas Lucas", "lucas"));