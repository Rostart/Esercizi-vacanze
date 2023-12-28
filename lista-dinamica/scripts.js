
    let input = document.getElementById("input-inserisci");
    let button = document.getElementById("aggiungi-elemento");
    let ul = document.getElementById("lista");
  
    function aggiungi() {
      let elemento = input.value;
      if (elemento !== "") {
        let list = document.createElement("li");
        list.textContent = elemento;
        ul.appendChild(list);
        input.value = "";
      }
    }
  
    button.addEventListener("click", aggiungi);
  


