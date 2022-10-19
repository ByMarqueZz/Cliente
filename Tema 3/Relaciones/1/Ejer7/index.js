function factorial(n) {
    if (n < 1) {
        return "Debe de ser mayor que 0";
    }
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

document.write("<table border=1>");
for (i=1; i<=10; i++) {
    document.write("<tr>");
    document.write(`<td>Factorial del ${i}</td>`);
    document.write(`<td>${factorial(i)}</td>`);
    document.write("</tr>");
}
document.write("</table>");
