window.onload = function() {
    var button = document.getElementById("buttonAjax");
    button.disabled = true;
    button.innerText = "Cargando...";
    cabecera();
    button.onclick = () => {
        let div = document.getElementById("perros");
        div.innerHTML = "";
        peticion(token, page);
    };
    window.addEventListener('scroll', () => {
        if (
            window.scrollY - 400 + window.innerHeight >= document.body.offsetHeight - 1000
        ) {
            page++;
            peticion(token, page);
        }
    });
}

var token = '';
var page = 1;
function cabecera() {
    var jdata = new Object();
    jdata.grant_type = "client_credentials";
    jdata.client_id = "TcwSrYYl9VhFboIlvAPpOcTw2s73FZs0kzVODJar1VytGL3W7R";
    jdata.client_secret = "Dsa1bacREBHc6uCfPVNMdgPgjySiyCj54bRzTrc4";
    httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "https://api.petfinder.com/v2/oauth2/token", true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(jdata));
    
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var respuesta = JSON.parse(httpRequest.responseText);
                console.log(respuesta.access_token);
                token = respuesta.access_token;
                var button = document.getElementById("buttonAjax");
                button.disabled = false;
                button.innerText = "Buscar perros";
            }
        }
    }
}

function peticion(token, page) {
    httpRequest = new XMLHttpRequest();
    // var s = document.getElementById("inputAjax").value;
    httpRequest.open("GET", "https://api.petfinder.com/v2/animals?type=dog&page=" + page, true);
    httpRequest.setRequestHeader("Authorization", "Bearer " + token);
    httpRequest.onreadystatechange = trateRespuesta;
    httpRequest.send();
}
function trateRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var objetoXML = JSON.parse(httpRequest.responseText);
            console.log(objetoXML);
            for (perro of objetoXML.animals) {
                if (perro.photos.length > 0) {
                    var divPrincipal = document.getElementById("perros");
                    var div = document.createElement("div");
                    div.className = "perro";
                    var img = document.createElement("img");
                    img.class = "imgPerro";
                    var p = document.createElement("p");
                    var h2 = document.createElement("h2");
                    if (perro.photos.length > 0) {
                        img.src = perro.photos[0].medium;
                    }
                    h2.innerHTML = perro.name;
                    p.innerText = 'Edad: ' + perro.age + '\nSexo: ' + perro.gender + '\nEstado: ' + perro.status + '\nTamaño: ' + perro.size + '\nRaza: ' + perro.breeds.primary + '\nEmail: ' + perro.contact.email + '\nTelefono: ' + perro.contact.phone;
                    div.appendChild(h2);
                    div.appendChild(img);
                    div.appendChild(p);
                    divPrincipal.appendChild(div);
                }
            }
        } else if (httpRequest.status === 400 || httpRequest === 401) {
            cabecera();
        } else {
            alert("There was a problem with the request.");
        }
    }
}