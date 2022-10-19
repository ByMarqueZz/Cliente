let compra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
compra.splice(1,1);
compra.splice(3, 0, 'Naranjas', 'Sandía');
compra.splice(1, 1, 'Cerezas', 'Nísperos');
console.log(compra);

array = [4,8,3,10,5];
nuevoArray = array.sort((a,b) => a - b);
console.log(nuevoArray);

arraySemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
nuevoArraySemana = arraySemana.filter(dia => dia.startsWith('M'));
console.log(nuevoArraySemana);

nuevoArraySemana2 = arraySemana.find(dia => dia.startsWith('M'));
console.log(nuevoArraySemana2);

nuevoArraySemana3 = arraySemana.findIndex(dia => dia.startsWith('M'));
console.log(nuevoArraySemana3);

nuevoArraySemana4 = arraySemana.some(dia => dia.startsWith('S'));
console.log(nuevoArraySemana4);

nuevoArraySemana5 = arraySemana.every(dia => dia.endsWith(('s')));
console.log(nuevoArraySemana5);

nuevoArraySemana6 = arraySemana.map(dia => dia.toUpperCase());
console.log(nuevoArraySemana6);

arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
nuevoArrayNotas = arrayNotas.reduce((total,nota)  => (total +=  nota));
console.log(nuevoArrayNotas / arrayNotas.length);

nuevoArraySemana7 = arraySemana.includes('Martes');
console.log(nuevoArraySemana7);

