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

window.onload = () => {
    btnAzul = document.getElementById("azul");
    btnRojo = document.getElementById("rojo");

    btnAzul.onclick = () => {
        setCookie("color", "azul", 1);
        document.body.style.backgroundColor = "blue";
    }
    btnRojo.onclick = () => {
        setCookie("color", "rojo", 1);
        document.body.style.backgroundColor = "red";
    }

    if (getCookie("color") == "azul") {
        document.body.style.backgroundColor = "blue";
    } else if (getCookie("color") == "rojo") {
        document.body.style.backgroundColor = "red";
    }
}