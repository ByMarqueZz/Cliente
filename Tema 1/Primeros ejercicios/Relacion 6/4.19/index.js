let columnas = 8;
let filas = 8;
let altura = parseInt(prompt("Altura y anchura de las celdas en px"));

document.write("<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”"+altura+"”>");

for (i=0; i<=filas; i++) {
    document.write("<tr bgcolor = ”white” height = ”50”>");
    for (j=0; j<=columnas; j++) {
        if (valor == true) {
            document.write("<td width = ”"+altura+"” bgcolor = ”white”=>ㅤㅤ</td>");
        } else {
            document.write("<td width = ”"+altura+"” bgcolor = ”black”=>ㅤㅤ</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");