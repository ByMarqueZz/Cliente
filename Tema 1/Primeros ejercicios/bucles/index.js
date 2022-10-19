for (let i=1; i<=10;i++) {
    document.write("Tabla del "+i);
    document.write("<br>");
    for (let j=0; j<=10; j++) {
        document.write(i+" x "+j+" = "+i*j+"<br>");
    }
    document.write("<br><br>");
}

let nombre=["pepe", "juan", "armando"];
for (let o=0; o<nombre.length; o++) {
    console.log(nombre[o]);
}

for (let u of nombre) {
    console.log(u);
}