let columnas = parseInt(prompt("Introduce el número de columnas"));
let altura = parseInt(prompt("Altura de las celdas en px"));
let ancho = parseInt(prompt("Anchura de las celdas en px"));

document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”"+altura*ancho+"”>");
document.write("<tr bgcolor = ”white” height = ”50”>");

for (let i=1; i<=columnas; i++) {
    document.write("<td width = ”"+ancho+"” > & n b s p ;</td>");
}
document.write("</tr>");
document.write("</table>");