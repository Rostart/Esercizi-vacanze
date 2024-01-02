let input = document.getElementById("campo-input");
let modifica = document.getElementById("testoDaModificare")

function CambiaStile() {
   
    modifica.classList.add("stile-cambiato");
    modifica.textContent = input.value;
    
    
}
   input.addEventListener("input", CambiaStile); 
