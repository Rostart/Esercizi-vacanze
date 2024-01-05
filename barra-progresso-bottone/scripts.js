const updateButton = document.getElementById('updateButton');
const progressBar = document.getElementById('progressBar');
let progress = 0;

function updateProgress() {
  if (progress < 100) {
    progress += 10; // Incrementa di 10 ogni volta che il pulsante viene premuto
    progressBar.style.width = `${progress}%`;
  } else {
    progress = 0; // Riporta la barra di progresso a 0 quando raggiunge il 100%
    progressBar.style.width = `${progress}%`;
  }
}

updateButton.addEventListener('click', updateProgress);
