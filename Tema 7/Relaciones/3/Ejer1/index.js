// coge la tabla y pinta de color rojo las que esten por encima de la tercera y de azul las que esten por debajo
$(document).ready(function(){

    $("tr").css("background-color","red");
    // selecciona de los 3 para abajo
    $("tr:gt(2)").css("background-color","blue");
});