let div = document.getElementById("contenitore"); 
let button = document.getElementById("button");
let posizione = 0;

function animazione() {
    posizione += 10;
    div.style.left = posizione + "px";
}

button.addEventListener("click", animazione);