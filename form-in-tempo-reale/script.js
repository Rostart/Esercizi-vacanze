const form = document.getElementById('myForm');
const campoNome = document.getElementById('name');
const campoEmail = document.getElementById('email');
const campoPassword = document.getElementById('password');

function mostraErrore(campo, messaggio) {
  const errore = campo.nextElementSibling;
  errore.textContent = messaggio;
  errore.style.display = 'block';
}

function nascondiErrore(campo) {
  const errore = campo.nextElementSibling;
  errore.textContent = '';
  errore.style.display = 'none';
}

function validaNome() {
  if (!campoNome.value.trim()) {
    mostraErrore(campoNome, 'Il nome è richiesto.');
  } else {
    nascondiErrore(campoNome);
  }
}

function validaEmail() {
  if (!campoEmail.value.trim() || !campoEmail.validity.valid) {
    mostraErrore(campoEmail, 'Inserisci un indirizzo email valido.');
  } else {
    nascondiErrore(campoEmail);
  }
}

function validaPassword() {
  if (!campoPassword.value.trim()) {
    mostraErrore(campoPassword, 'La password è richiesta.');
  } else if (campoPassword.value.length < 8) {
    mostraErrore(campoPassword, 'La password deve contenere almeno 8 caratteri.');
  } else {
    nascondiErrore(campoPassword);
  }
}

campoNome.addEventListener('input', validaNome);
campoEmail.addEventListener('input', validaEmail);
campoPassword.addEventListener('input', validaPassword);

form.addEventListener('submit', function(evento) {
  validaNome();
  validaEmail();
  validaPassword();

  if (!campoNome.value.trim() || !campoEmail.value.trim() || !campoPassword.value.trim() || campoPassword.value.length < 8 || !campoEmail.validity.valid) {
    evento.preventDefault();
  }
});
