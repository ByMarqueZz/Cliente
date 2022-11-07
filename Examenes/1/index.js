function Exa5(string) {
    let result = {};
    // Primero vemos cuantas veces se repite cada caracter
    for (let i = 0; i < string.length; i++) {
        if (result[string[i].toLowerCase()] === undefined) {
            result[string[i].toLowerCase()] = 1;
        } else {
            result[string[i].toLowerCase()]++;
        }
    }
    // Ahora creamos el string de salida
    let output = "";
    for (let key in result) {
        output += key + ':';
        for (let i=1; i<=result[key]; i++) {
            output += '+';
        }
        output += ', ';
    }
    return output;
}

function Exa6(array) {
    let sumas = []; // array donde se guardan todas las sumas
    let referencia = {}; // diccionario donde se guardan las sumas y sus posiciones
    let result = [];

    for (let i=0; i<array.length; i++) {
        let sum = 0;
        for (let j=0; j<array[i].length; j++) {
            sum += array[i][j];
        }
        sumas.push(sum);
        referencia[i] = sum;
    }
    
    // Ahora ordenamos el array de mayor a menor las sumas
    sumas.sort((a, b) => b - a);

    // Recorremos las sumas y añadimos al resultado el array de la posicion que nos indica el diccionario
    // Si ese array ya existe en el resultado no lo añadimos, así evitamos que se repitan arrays
    for (let i=0; i<sumas.length; i++) {
        for (let key in referencia) {
            if (result.includes(array[key]) === true) {
                continue;
            } else if (sumas[i] === referencia[key]) {
                result.push(array[key]);
            }
        }
    }
    return result;
}

function Exa7(id) {
    div = document.getElementById(id);
    div.style.fontSize = '12px';
    div.style.color = 'green';
    div.style.backgroundColor = 'blue';
    div.style.fontFamily = 'Comic Sans MS';
}

function Exa8() {
    div1 = document.getElementById('div1');
    div2 = document.getElementById('div2');
    div3 = document.getElementById('div3');
    div4 = document.getElementById('div4');

    // array de colores en hexadecimal
    let colores = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF7F00', '#00FF00', '#0000FF', '#4B0082', '#9400D3', '#FF7F00'];
    div1.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    div2.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    div3.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    div4.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

    // establecemos los eventos
    vecesClickadas = {};
    div1.addEventListener('click', function() {
        if (vecesClickadas['div1'] === undefined) {
            vecesClickadas['div1'] = 1;
        } else {
            vecesClickadas['div1']++;
        }
        console.log('El div de color '+div1.style.backgroundColor+' ha sido clickado: ' + vecesClickadas['div1'] + ' veces');
    });

    div2.addEventListener('click', function() {
        if (vecesClickadas['div2'] === undefined) {
            vecesClickadas['div2'] = 1;
        } else {
            vecesClickadas['div2']++;
        }
        console.log('El div de color '+div2.style.backgroundColor+' ha sido clickado: ' + vecesClickadas['div2'] + ' veces');
    });

    div3.addEventListener('click', function() {
        if (vecesClickadas['div3'] === undefined) {
            vecesClickadas['div3'] = 1;
        } else {
            vecesClickadas['div3']++;
        }
        console.log('El div de color '+div3.style.backgroundColor+' ha sido clickado: ' + vecesClickadas['div3'] + ' veces');
    });

    div4.addEventListener('click', function() {
        if (vecesClickadas['div4'] === undefined) {
            vecesClickadas['div4'] = 1;
        } else {
            vecesClickadas['div4']++;
        }
        console.log('El div de color '+div4.style.backgroundColor+' ha sido clickado: ' + vecesClickadas['div4'] + ' veces');
    });
    
}

// Llamada a la función
window.onload = function() {
    console.log("Ejercicio 5:");
    console.log(Exa5("Chicago"));
    console.log(Exa5("Granada"));

    console.log("Ejercicio 6:");
    console.log(Exa6([[1,3], [4,2], [2,1]]));
    console.log(Exa6([[1,3], [4,2], [2,1], [5,1], [1,2]]));

    Exa7('ejer7');

    Exa8();
}