let columnas = parseInt(prompt("Introduce el número de columnas"));
let filas = parseInt(prompt("Introduce el número de filas"));
let altura = parseInt(prompt("Altura de las celdas en px"));
let ancho = parseInt(prompt("Anchura de las celdas en px"));

document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”"+altura*ancho+"”>");

for (i=0; i<=filas; i++) {
    document.write("<tr bgcolor = ”white” height = ”50”>");
    for (j=0; j<=columnas; j++) {
        document.write("<td width = ”"+ancho+"” > & n b s p ;</td>");
    }
    document.write("</tr>");
}
document.write("</table>");