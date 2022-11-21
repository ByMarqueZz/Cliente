window.onload = function() {
    var button = document.getElementById("buttonAjax");
    button.onclick = peticion;
}
function peticion() {
    httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = trateRespuesta;
    httpRequest.open("GET", "archivo.xml");
    httpRequest.send();
}
function trateRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var objetoXML = httpRequest.responseXML;
            document.body.innerHTML += objetoXML.getElementsByTagName("nombre")[0].innerHTML;
        } else {
            alert("There was a problem with the request.");
        }
    }
}