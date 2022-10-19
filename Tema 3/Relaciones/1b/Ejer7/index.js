const tomarMatriz = (...array) => {
    var total = 0;
    for (i of array) {
        total += i;
    }
    return total;
}

document.write(tomarMatriz(1,2,3,4,1,2,3,4));