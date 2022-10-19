let fechaHoy = new Date();

let fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate() + 85);
fecha85.setFullYear(fecha85.getFullYear() + 2);

let fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate() - 187);
fecha187.setHours(fecha187.getFullYear() - 24);

let fechaResto = fecha85 - fecha187;

document.write(fechaHoy+"<br>");
document.write(fecha85+"<br>");
document.write(fecha187+"<br>");
document.write(fechaResto);