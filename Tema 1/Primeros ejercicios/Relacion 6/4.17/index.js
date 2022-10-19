for (let i=1; i<=10; i++) {
    document.write("Tabla del "+i+"<br>");
    for (let j=0; j<=10; j++) {
        document.write(`${i} x ${j} = ${i*j}<br>`);
    }
    document.write("<br>");
}