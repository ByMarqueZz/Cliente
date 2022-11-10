window.onload = function() {
    function añadirCartas(array, cartasPulsadas) {
        div = document.getElementById("cartas");
        for (i = 0; i < 10; i++) {
            div2 = document.createElement("div");
            div2.className = "carta";
            div2.id = i;
            img = document.createElement("img");
            img.src = "./img/reverso.jpg";
            img.alt = "Carta " + i;
            img.id = "img" + i;
            div2.appendChild(img);
            div2.addEventListener("click", function() {
                pulsarCarta(array, this.id, cartasPulsadas);
            });
            div.appendChild(div2);
        }
    }
    function pulsarCarta(array, id, cartasPulsadas) {
        img = document.getElementById("img" + id);
        img.src = "./img/" + array[id] + ".jpg";
        cartasPulsadas.push(img);
        // console.log(cartasPulsadas);
        if (cartasPulsadas.length == 2) {
            // hacer un setTimeout para que se vea la carta
            setTimeout(function() {
                if (cartasPulsadas[0].src == cartasPulsadas[1].src) {
                    // accedo al id de la carta sin el img
                    div = document.getElementById(cartasPulsadas[0].id.substring(3));
                    div2 = document.getElementById(cartasPulsadas[1].id.substring(3));
                    div.style.visibility = "hidden";
                    div2.style.visibility = "hidden";
                    // borrar array
                    cartasPulsadas.splice(0, 2);
                    // comprobamos si ganas
                    divGanado = document.getElementsByClassName("carta");
                    conditionWin = true;
                    for (div of divGanado) {
                        if (div.style.visibility != "hidden") {
                            conditionWin = false;
                        }
                    }
                    if (conditionWin) {
                        h1 = document.getElementsByTagName('h1')[0];
                        h1.innerHTML = "¡Has ganado!";
                        buttonDisabled = document.getElementById('reset');
                        buttonDisabled.disabled = false;
                    }
                    
                } else {
                    cartasPulsadas[0].src = "./img/reverso.jpg";
                    cartasPulsadas[1].src = "./img/reverso.jpg";
                    vidas = document.getElementById("vidas");
                    // Compruebo si quedan vidas
                    vidas.innerHTML = "Tienes " + (parseInt(vidas.innerHTML.split(" ")[1]) - 1) + " vidas";
                    if (parseInt(vidas.innerHTML.split(" ")[1]) == 0) {
                        h1 = document.getElementsByTagName('h1')[0];
                        h1.innerHTML = "¡Has perdido!";
                        divGanado = document.getElementsByClassName("carta");
                        for (div of divGanado) {
                            div.style.visibility = "hidden";
                        }
                        buttonDisabled = document.getElementById('reset');
                        buttonDisabled.disabled = false;
                    }
                    // borrar array
                    cartasPulsadas.splice(0, 2);
                }
            }, 500);
        }
    }
    function restart() {
        vidas = document.getElementById("vidas");
        vidas.innerHTML = "Tienes 10 vidas";
        buttonDisabled = document.getElementById('reset');
        buttonDisabled.disabled = true;
        buttonDisabled.addEventListener("click", restart);
        div = document.getElementById("cartas");
        div.innerHTML = "";
        var array = ordenarCartas();
        var cartasPulsadas = [];
        añadirCartas(array, cartasPulsadas);
    }
    function ordenarCartas() {
        let array = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'];
        // desordenar array de forma aleatoria
        array.sort(function() {return Math.random() - 0.5});
        return array;
    }
    // bloque principal
    restart();
}