window.onload = function() {
    function getCookie(name) {
        name += "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function añadirBotones() {
        document.getElementById("letras").innerHTML = '';
        for (let letra of letras) {
            var boton = document.createElement("button");
            boton.id = letra;
            boton.innerHTML = letra;
            boton.onclick = function() {
                comprobarLetra(letra, palabra);
            }
            document.getElementById("letras").appendChild(boton);
        }
    }

    function añadirGuiones(palabra) {
        document.getElementById("resultado").innerHTML = '';
        for (let i = 0; i < palabra.length; i++) {
            var parrafo = document.createElement("p");
            parrafo.id = i;
            parrafo.innerHTML = "_";
            document.getElementById("resultado").appendChild(parrafo);
        }
    }

    function seleccionarPalabra() {
        palabra = [];
        var palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];
        for (let letra of palabraElegida) {
            palabra.push(letra);
        }
        return palabra;
    }
    function comprobarLetra(letra, palabra) {
        botonLetra = document.getElementById(letra);
        botonLetra.disabled = true;
        condition = false;
        for (i=0; i<palabra.length; i++) {
            if (letra == palabra[i]) {
                document.getElementById(i).innerHTML = letra;
                condition = true;
            }
        }
        // Comprobar si hemos ganado
        parrafos = document.getElementsByTagName("p");
        conditionWin = true;
        for (parrafo of parrafos) {
            if (parrafo.innerHTML == "_") {
                conditionWin = false;
            }
        }
        if (conditionWin) {
            vida = document.getElementById("vidas");
            vida.innerText = "¡Has ganado!";
            var ganadas = obtenerGanadas();
            setCookie("ganadas", ganadas + 1, 365);
            botones = document.getElementsByTagName("button");
            for (boton of botones) {
                boton.disabled = true;
            }
            document.getElementById("reiniciar").disabled = false;
        }
        // Restar vidas
        if (condition == false) {
            vida = document.getElementById("vidas");
            vidaText = vida.innerText;
            vidaNum = parseInt(vidaText.substr(7,2));
            vidaNum--;
            vida.innerText = "Tienes " + vidaNum + " vidas";
            if (vidaNum == 0) {
                vida = document.getElementById("vidas");
                vida.innerText = "¡Has perdido! La frase era: \n" + palabra.join("");
                var perdidas = obtenerPerdidas();
                setCookie("perdidas", perdidas + 1, 365);
                botones = document.getElementsByTagName("button");
                for (boton of botones) {
                    boton.disabled = true;
                }
                document.getElementById("reiniciar").disabled = false;
            }
        }
    }

    function reiniciar() {
        document.getElementById("reiniciar").disabled = true;
        añadirBotones();
        var palabra = seleccionarPalabra();
        añadirGuiones(palabra);
        document.getElementById("vidas").innerText = "Tienes 10 vidas";
        var ganadas = obtenerGanadas();
        var perdidas = obtenerPerdidas();
        document.getElementById("ganadas").innerHTML = "";
        document.getElementById("perdidas").innerHTML = "";
        document.getElementById("ganadas").innerText = "Has ganado " + ganadas + " veces";
        document.getElementById("perdidas").innerText = "Has perdido " + perdidas + " veces";
        return palabra;
    }

    function obtenerGanadas() {
        ganadas = getCookie("ganadas");
        if (ganadas == "" || ganadas == '0' || ganadas == null) {
            setCookie("ganadas", 0, 365);
            ganadas = 0;
        }
        if (isNaN(parseInt(ganadas))) {
            ganadas = 0;
        }
        return parseInt(ganadas);
    }
    function obtenerPerdidas() {
        perdidas = parseInt(getCookie("perdidas"));
        if (perdidas == "" || perdidas == '0' || perdidas == null) {
            setCookie("perdidas", 0, 365);
            perdidas = 0;
        }
        if (isNaN(parseInt(perdidas))) {
            perdidas = 0;
        }
        return parseInt(perdidas);
    }
    // array de palabras con 9 letras
    var palabras = ["autobuses", "apostoles", "africanos", "capitales", "pelota", "futbol", "mujeres", "hombres", "alopecia", "javascript", "hola", "juan", "ballena"];
    // array de letras
    var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var palabra = reiniciar();
    document.getElementById("reiniciar").addEventListener("click", reiniciar);   
}

