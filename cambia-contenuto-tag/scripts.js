let par = document.getElementById("Paragrafo");
let button = document.getElementById("bottone");


function CambiaContenuto () {

    par.textContent = "Viva la vita";
}

button.addEventListener("click", CambiaContenuto);