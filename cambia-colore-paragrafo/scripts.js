let button = document.getElementById("color");
let nome = document.getElementById("name");

function CambiaColore () {

    nome.style.color = "orange";
}

button.addEventListener("click", CambiaColore);
