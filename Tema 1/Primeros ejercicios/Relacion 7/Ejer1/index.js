function suma(...numeros) {
    let resultado=0;
    for (i of numeros) {
        resultado += i;
    }
    document.write(resultado);
}
suma(1,2,3,4,5,6,7,8,9);