window.onload = function() {
    var button = document.getElementById("buttonAjax");
    button.onclick = peticion;
}
function peticion() {
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "http://www.omdbapi.com/?apikey=b8d85a5&s=star", true);
    httpRequest.onreadystatechange = trateRespuesta;
    httpRequest.send();
}
function trateRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var objetoXML = httpRequest.responseXML;
            document.body.innerHTML += objetoXML;
        } else {
            alert("There was a problem with the request.");
        }
    }
}