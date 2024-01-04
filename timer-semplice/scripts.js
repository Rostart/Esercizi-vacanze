let intervallo;
let secondi = 0;
let minuti = 0;
let ora = 0;

function start() {
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    intervallo = setInterval(aggiorna, 1000);
    startBtn.disabled = true;
}

function stop() {
    clearInterval(intervallo);
    let startBtn = document.getElementById("startBtn");
    startBtn.disabled = false;
}

function aggiorna() {
    secondi++;
    if (secondi === 60) {
        secondi = 0;
        minuti++;
        if (minuti === 60) {
            minuti = 0;
            ora++;
        }
    }

    const displayOra = ora < 10 ? `0${ora}` : ora;
    const displayMinuti = minuti < 10 ? `0${minuti}` : minuti;
    const displaySecondi = secondi < 10 ? `0${secondi}` : secondi;

    document.getElementById('timerDisplay').innerText = `${displayOra}:${displayMinuti}:${displaySecondi}`;
}

document.addEventListener('DOMContentLoaded', function() {
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    startBtn.addEventListener("click", start);
    stopBtn.addEventListener("click", stop);
});





