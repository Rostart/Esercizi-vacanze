let SelezionaSfondo = document.getElementById('selectBackground');
let SfondoDiv = document.getElementById('backgroundDiv');


function changeBackground() {
  let ValoreSfonfo = SelezionaSfondo.value;

  switch(ValoreSfonfo) {
    case 'background1':
      SfondoDiv.style.backgroundImage = "url('/Users/rosariofortunato/Desktop/Esercizi vacanza/cambia-sfondo-dropdown/sfondo1.avif')";
      break;
    case 'background2':
      SfondoDiv.style.backgroundImage = "url('/Users/rosariofortunato/Desktop/Esercizi vacanza/cambia-sfondo-dropdown/sfondo2.jpeg')";
      break;
    case 'background3':
      SfondoDiv.style.backgroundImage = "url('/Users/rosariofortunato/Desktop/Esercizi vacanza/cambia-sfondo-dropdown/sfondo3.jpeg')";
      break;
    default:
      SfondoDiv.style.backgroundImage = "url('/Users/rosariofortunato/Desktop/Esercizi vacanza/cambia-sfondo-dropdown/default.jpeg')";
  }
}


SelezionaSfondo.addEventListener('change', changeBackground);
