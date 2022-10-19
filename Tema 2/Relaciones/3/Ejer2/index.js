function unaFuncion(cad_arg) {
    let pruebaMayuscula = cad_arg.toUpperCase();
    let pruebaMinuscula = cad_arg.toLowerCase();
    if (pruebaMayuscula === cad_arg) {
        document.write("Todo es mayúscula");
    } else if (pruebaMinuscula === cad_arg) {
        document.write("Todo es minúscula");
    } else {
        document.write("Es una mezcla de los dos");
    }
}

unaFuncion("Maria del carmen");
document.write("<br>");
unaFuncion("MARIA DEL CARMEN");
document.write("<br>");
unaFuncion("maria del carmen");