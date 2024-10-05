// File: js/main2.js

let score = 0;
let level = 0;
let currentStory = null;
let storiesPorNivel = {};
let maxLevelReached = 1; // Nivel máximo alcanzado por el jugador
let countdownInterval = null; // Variable para el intervalo de la cuenta regresiva

// Cargar el archivo JSON con fetch
fetch('../../assets/data/historias.json')
    .then(response => response.json())
    .then(data => {
        storiesPorNivel = data;
        console.log("Historias cargadas correctamente:", storiesPorNivel);
        mostrarNiveles(); // Mostrar los niveles una vez que las historias se cargan
    })
    .catch(error => console.error('Error al cargar las historias:', error));

// Función para mostrar los niveles como botones
function mostrarNiveles() {
    const levelSelection = document.getElementById('level-selection');
    levelSelection.innerHTML = ''; // Limpiar el contenido anterior

    // Crear botones de nivel
    Object.keys(storiesPorNivel).forEach(nivel => {
        const nivelBtn = document.createElement('button');
        nivelBtn.textContent = `Nivel ${nivel}`;
        nivelBtn.disabled = nivel > maxLevelReached; // Deshabilitar si el nivel no está desbloqueado
        nivelBtn.onclick = () => iniciarNivel(nivel); // Asignar el inicio del nivel al hacer clic

        levelSelection.appendChild(nivelBtn);
    });
}

// Función para mostrar la historia y la imagen asociada
function displayStory() {
    if (currentStory) {
        document.getElementById('story').textContent = currentStory.text;
        document.getElementById('story').style.display = 'block';

        const storyImage = document.getElementById('storyImage');
        storyImage.src = currentStory.image;
        storyImage.style.display = 'block';

        // Ocultar el quiz mientras la historia está visible
        document.getElementById('quiz').style.display = 'none';

        // Iniciar cuenta regresiva de 5 segundos
        iniciarCuentaRegresiva(5);
    }
}

// Función para manejar el inicio del nivel
function iniciarNivel(nivel) {
    level = nivel;
    currentStory = storiesPorNivel[level];
    if (currentStory) {
        document.getElementById('game-area').style.display = 'block'; // Mostrar el área de juego
        displayStory();
        document.getElementById('question').textContent = currentStory.question;
        document.getElementById('answer').value = ''; // Limpiar la respuesta anterior
    } else {
        document.getElementById('result').textContent = "¡Has completado todas las historias!";
    }
}

// Función para iniciar la cuenta regresiva
function iniciarCuentaRegresiva(segundos) {
    let countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block'; // Mostrar el elemento de la cuenta regresiva
    countdownElement.textContent = `Tiempo restante: ${segundos} segundos`;

    countdownInterval = setInterval(() => {
        segundos--;
        countdownElement.textContent = `Tiempo restante: ${segundos} segundos`;

        if (segundos <= 0) {
            clearInterval(countdownInterval); // Detener la cuenta regresiva
            countdownElement.style.display = 'none'; // Ocultar la cuenta regresiva
            mostrarPregunta(); // Mostrar el quiz cuando termine la cuenta regresiva
        }
    }, 1000);
}

// Función para mostrar el quiz después de la historia
function mostrarPregunta() {
    document.getElementById('story').style.display = 'none'; // Ocultar la historia
    document.getElementById('storyImage').style.display = 'none'; // Ocultar la imagen
    document.getElementById('quiz').style.display = 'block'; // Mostrar el quiz
}

// Función para pasar al siguiente nivel
function nextLevel() {
    score += 10;
    document.getElementById('score').textContent = `Puntuación: ${score}`;
    document.getElementById('result').textContent = '';
    
    const nextLevel = parseInt(level) + 1;
    if (storiesPorNivel[nextLevel]) {
        maxLevelReached = Math.max(maxLevelReached, nextLevel); // Actualizar nivel máximo alcanzado
        mostrarNiveles(); // Actualizar la selección de niveles (desbloquear el siguiente)
        iniciarNivel(nextLevel); // Iniciar el siguiente nivel
    } else {
        document.getElementById('result').textContent = "¡Has completado todos los niveles!";
    }
}

// Manejar el envío de la respuesta
document.getElementById('submit').onclick = function() {
    const answer = document.getElementById('answer').value.toLowerCase();
    
    // Comprobar si la respuesta es correcta
    if (answer === currentStory.answer) {
        nextLevel(); // Si es correcta, pasar al siguiente nivel
    } else {
        document.getElementById('result').textContent = "Incorrecto. Inténtalo de nuevo.";
    }
};
