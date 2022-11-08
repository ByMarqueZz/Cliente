window.onload = function() {
    function añadirCartas(array) {
        div = document.getElementById("cartas");
        for (i = 0; i < 10; i++) {
            div2 = document.createElement("div");
            div2.className = "carta";
            div2.id = i;
            img = document.createElement("img");
            img.src = "./img/reverso.jpg";
            img.alt = "Carta " + i;
            img.addEventListener("click", function() {
                this.src = "./img/" + array[this.parentNode.id] + ".jpg";
            });
            div2.appendChild(img);
            div.appendChild(div2);
        }
    }
    function ordenarCartas() {
        let array = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'];
        // desordenar array de forma aleatoria
        array.sort(function() {return Math.random() - 0.5});
        return array;
    }
    // codigo principal
    let array = ordenarCartas();
    añadirCartas(array);
    
}