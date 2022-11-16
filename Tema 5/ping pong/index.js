var posX, posY, direccionX, direccionY;

function moverPelota(pelota) {
    setInterval(function() {
        x = pelota.getAttribute("cx", posX);
        y = pelota.getAttribute("cy", posY);
        var marcador1 = document.getElementById("marcador1");
        var marcador2 = document.getElementById("marcador2");
        if (posX > 780) {
            if (colision() == true) {
                direccionX = -1;
            } else {
                marcador1.innerHTML = parseInt(marcador1.innerHTML) + 1
                restart();
            }
        }
        if (posX < 10) {
            if (colision() == true) {
                direccionX = 1;
            } else {
                marcador2.innerHTML = parseInt(marcador2.innerHTML) + 1
                restart();
            }
        }
        if (posY < 10) {
            direccionY = 1;
        }
        if (posY > 390) {
            direccionY = -1;
        }
        posX = posX + direccionX;
        posY = posY + direccionY;
        pelota.setAttribute("cx", posX);
        pelota.setAttribute("cy", posY);
    }, 10);
}

function moverPalas() {
    var pala1 = document.getElementById("pala1");
    var pala2 = document.getElementById("pala2");
    var pala1Y = 20;
    var pala2Y = 20;
    var velocidad = 10;
    var velocidad2 = 10;
    document.addEventListener("keydown", function(event) {
        if (event.keyCode == 87) {
            pala1Y = pala1Y - velocidad;
            pala1.setAttribute("y", pala1Y);
        }
        if (event.keyCode == 83) {
            pala1Y = pala1Y + velocidad;
            pala1.setAttribute("y", pala1Y);
        }
        if (event.keyCode == 38) {
            pala2Y = pala2Y - velocidad2;
            pala2.setAttribute("y", pala2Y);
        }
        if (event.keyCode == 40) {
            pala2Y = pala2Y + velocidad2;
            pala2.setAttribute("y", pala2Y);
        }
    });
}

function colision() {
    var cx = parseInt(document.getElementById("ball").getAttribute("cx"));
    var cy = parseInt(document.getElementById("ball").getAttribute("cy"));
    var x1 = parseInt(document.getElementById("pala1").getAttribute("x"));
    var y1 = parseInt(document.getElementById("pala1").getAttribute("y"));
    var x2 = parseInt(document.getElementById("pala2").getAttribute("x"));
    var y2 = parseInt(document.getElementById("pala2").getAttribute("y"));
    if (cx > x1 && cy > y1 && cy < y1 + 50) {
        return true;
    }
    if (cx < x2 && cy < y2 && cy > y2 + 50) {
        return true;
    }
    return false;
}

function restart() {
    var pelota = document.getElementById("ball");
    posX = 50;
    posY = 50;
    direccionX = 1;
    direccionY = 1;
    moverPelota(pelota);
    moverPalas();
}

window.onload = function() {
    restart();
}