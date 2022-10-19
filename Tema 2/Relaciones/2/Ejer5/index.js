let primer = parseInt(prompt("Primer valor"));
let segundo = parseInt(prompt("Segundo valor"));
let tercer = parseInt(prompt("Tercer valor"));


function solucionar(a, b, c, sol) {
    sol[0] = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
    sol[1] = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);  
}

let soluc = new Array(2);
solucionar(primer,segundo,tercer, soluc) ;
document.write( "Soluciones "+soluc[0]+" y "+soluc[1]);