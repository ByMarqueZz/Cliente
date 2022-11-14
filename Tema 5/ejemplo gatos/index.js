window.onload = function() {
    for (let i=1; i<=5; i++) {
        div = document.getElementById("gatos"+i);
        div.addEventListener("click", function() {
            p = document.getElementById("gato"+i);
            var num = p.innerText.split(" ")[1];
            var nombre = p.innerText.split(" ")[0];
            num = parseInt(num) + 1;
            p.innerText = nombre + " " + num;
        });
    }
}