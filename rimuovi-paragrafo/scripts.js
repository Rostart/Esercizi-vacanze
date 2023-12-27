let par = document.getElementById("paragrafo");
let button = document.getElementById("remove");

function removeParagrafo () {

    par.remove("paragrafo");
}
button.addEventListener("click", removeParagrafo);