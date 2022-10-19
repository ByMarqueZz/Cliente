function sumEveryOther(...numeros) {
    let resultado = 0;
    for (let i=0; i<=numeros.length; i++) {
        if (i%2==0) {
            resultado += numeros[i];
        }
    }
    document.write(resultado);
}

sumEveryOther(5, 6, 3, 4, 1);