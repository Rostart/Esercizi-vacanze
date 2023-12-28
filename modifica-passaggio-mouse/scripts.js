let immagine1 = document.getElementById('immagine1');
let immagine2 = document.getElementById('immagine2');

function mostraImmagine2() {
    
    immagine1.style.display = 'none'; 
    immagine2.style.display = 'inline';
  }
  
  
  function ripristinaImmagine1() {
    
    immagine2.style.display = 'none'; 
    immagine1.style.display = 'inline';
  }
  
  
  
  immagine1.addEventListener('mouseover', mostraImmagine2);
  immagine2.addEventListener('mouseout', ripristinaImmagine1);