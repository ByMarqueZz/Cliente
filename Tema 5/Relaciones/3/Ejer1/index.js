window.onload = function() {
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");

    var minutos = document.getElementById("minutos");
    var segundos = document.getElementById("segundos");

    btnStart.addEventListener("click", () => {
        interval = start();
    });
    btnStop.addEventListener("click", () => {
        stop(interval);
    });
    btnReset.addEventListener("click", reset);

    function start() {
        var interval = setInterval(function() {
            if (segundos.innerText == 59) {
                segundos.innerText = "0" + 0;
                minutos.innerText++;
                minutos.innerText = minutos.innerText < 10 ? "0" + minutos.innerText : minutos.innerText;
            } else if (segundos.innerText < 9) {
                segundos.innerText++;
                segundos.innerText = "0" + segundos.innerText;
            } else {
                segundos.innerText++;
            }
        }, 1000);
        return interval;
    }

    function stop(interval) {
        clearInterval(interval);
    }
    
    function reset() {
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";
    }
}