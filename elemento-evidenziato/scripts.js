const listaElementi = document.querySelectorAll('#elementi li');


listaElementi.forEach((elemento) => {
    elemento.addEventListener('mouseover', () => {
       
        elemento.style.backgroundColor = 'yellow';
    })});

    listaElementi.forEach((elemento) => {
        elemento.addEventListener('mouseout', () => {
           
            elemento.style.backgroundColor = '';
        })});

