function empezar() {
    // Genera 6 colores rgb aleatorios
    rgb = generate6rgb();
    numGanador = Math.floor(Math.random() * 6);
    document.getElementById("titulo").innerText = rgb[numGanador];
    document.getElementById("color1").style.backgroundColor = rgb[0];
    document.getElementById("color2").style.backgroundColor = rgb[1];
    document.getElementById("color3").style.backgroundColor = rgb[2];
    document.getElementById("color4").style.backgroundColor = rgb[3];
    document.getElementById("color5").style.backgroundColor = rgb[4];
    document.getElementById("color6").style.backgroundColor = rgb[5];

    // Asigna el evento click a cada div
    for (i=1;i<=6;i++){
        document.getElementById("color"+i).addEventListener('click', (e) => {
            if (e.target.ganador) {
                empezar();
                // e.target.ganador = false;
            } else {
                e.target.style.backgroundColor = 'white';
                e.target.style.border = 'none';
            }});
        if (i != numGanador) {
            document.getElementById("color"+i).ganador = false;
        } else {
            document.getElementById("color"+i).ganador = true;
        }
    }
}

function generate6rgb(){
    let rgb = [];
    for(let i = 0; i < 6; i++){
        number = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        rgb.push(number);
    }
    return rgb;
}

window.onload = function(){
    empezar();
}