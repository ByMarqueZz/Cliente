// cambia el tamaño de fuente de los h3
// y el color de fondo de los párrafos
// al pasar el ratón por encima de los h3
$(document).ready(function(){
    
    $("h3").hover(function(){
        $(this).css("font-size","30px");
        $(this).css("color","red");
        $(this).css("background-color","yellow");
    });
});