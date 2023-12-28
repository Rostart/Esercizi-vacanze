let elemento = document.getElementById('elemento');


function cambiaColoreSfondo() {
  elemento.style.backgroundColor = 'blue'; 
}

elemento.addEventListener('mouseout', cambiaColoreSfondo);

