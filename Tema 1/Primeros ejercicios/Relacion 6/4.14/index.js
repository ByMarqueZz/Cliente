let columnas = parseInt(prompt("Introduce el número de columnas"));
let altura = parseInt(prompt("Altura de las celdas en px"));
let ancho = parseInt(prompt("Anchura de las celdas en px"));

document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”"+altura*ancho+"”>");
document.write("<tr bgcolor = ”white” height = ”50”>");

let i=1;
while (i<=columnas) {
    if (i%2==0) {
        document.write("<td width = ”"+ancho+"” bgcolor = ”white”= > & n b s p ;</td>");
    } else {
        document.write("<td width = ”"+ancho+"” bgcolor = ”black”= > & n b s p ;</td>");
    }
    i++;
}

document.write("</tr>");
document.write("</table>");