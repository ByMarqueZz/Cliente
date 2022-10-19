function onlyUniques(...numeros) {
    let nuevoArray = [];
    for (let i=0; i<numeros.length; i++) {
        if (!nuevoArray.includes(numeros[i])) {
            nuevoArray.push(numeros[i]);
        }
    }
    document.write(nuevoArray);
}

onlyUniques(1,3,4,1,5,1,4,9,6,7);