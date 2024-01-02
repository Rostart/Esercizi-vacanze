let checkbox = document.getElementById("visibile"); 
let mostra = document.getElementById("elementoDaMostrareNascondere"); 

function GestioneVisibilita() {
    if (checkbox.checked) {
        mostra.style.display = "block";
    } else {
        mostra.style.display = "none";
    }
}

checkbox.addEventListener("change", GestioneVisibilita);
