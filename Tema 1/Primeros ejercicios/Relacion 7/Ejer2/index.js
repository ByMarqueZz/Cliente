function addOnlyNums(...numeros) {
    let resultado=0;
    for (i of numeros) {
        if (!isNaN(i)) {
            resultado += i;
        }
    }
    document.write(resultado);
}
addOnlyNums(1,2,3,4,5,"cat",1,4,"pepe");