function squareAndSum(...numeros) {
    let resultado = 0;
    for (let i=0; i<numeros.length; i++) {
        resultado += Math.pow(numeros[i], 2);
    }
    document.write(resultado);
}

squareAndSum(1,4,3,1,4,98);