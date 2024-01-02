let testo = document.getElementById("TestoInserito");
let modifica = document.getElementById("TestodaModificare");

function ModificaTesto () {
    let = nuovotesto = testo.value;
    modifica.textContent = nuovotesto;

}

testo.addEventListener("input", ModificaTesto);