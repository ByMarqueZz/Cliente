window.onload = function() {
    // mostrar el numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    console.log("Hay " + document.getElementsByTagName('a').length + " enlaces en la página");
    // mostrar la direccion del penultimo enlace
    console.log("La dirección del penúltimo enlace es: " + enlaces[enlaces.length - 2].href);
    // mostrar el numero de enlaces que apuntan a wwww.google.es
    var contador = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "https://www.google.es/") {
            contador++;
        }
    }
    console.log("Hay " + contador + " enlaces que apuntan a https://www.google.es/");
    // numero de enlaces del tercer parrafo
    var parrafos = document.getElementsByTagName("p");
    console.log("Hay " + parrafos[2].getElementsByTagName("a").length + " enlaces en el tercer párrafo");
}