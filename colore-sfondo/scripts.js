let div = document.getElementById("container");
let button = document.getElementById("button");

function CambiaColore() {
    div.style.backgroundColor = "black";

}

button.addEventListener("click", CambiaColore);