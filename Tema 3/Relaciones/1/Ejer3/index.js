function lanzamiento () {
    let numero1 = 0;
    let numero2 = 0;
    let numero3 = 0;
    let numero4 = 0;
    let numero5 = 0;
    let numero6 = 0;

    for (i=0; i<6000; i++) {
        let numero = Math.trunc(Math.random() * (7 - 1) + 1);
        if (numero == 1) {
            numero1++;
        } else if (numero == 2) {
            numero2++;
        } else if (numero == 3) {
            numero3++;
        } else if (numero == 4) {
            numero4++;
        } else if (numero == 5) {
            numero5++;
        } else if (numero == 6) {
            numero6++;
        }
    }
    document.write("1: " + numero1 + "<br>");
    document.write("2: " + numero2 + "<br>");
    document.write("3: " + numero3 + "<br>");
    document.write("4: " + numero4 + "<br>");
    document.write("5: " + numero5 + "<br>");
    document.write("6: " + numero6);
}



lanzamiento();