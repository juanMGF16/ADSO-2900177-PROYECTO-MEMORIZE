const cui = document.getElementById('cui');
const welcomeSign = document.getElementById('welcome-sign');

// Alternar el cartel al hacer clic en el cui
cui.addEventListener('click', function() {
  if (welcomeSign.style.display === 'none') {
    welcomeSign.style.display = 'block';
  } else {
    welcomeSign.style.display = 'none';
  }
});

// Mostrar con transición suave
cui.addEventListener('click', function() {
  welcomeSign.classList.toggle('show');
});
function hideSpeechBubble() {
  document.querySelector('.speech-bubble').style.display = 'none';
}
