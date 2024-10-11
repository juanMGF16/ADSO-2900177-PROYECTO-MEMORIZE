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
    const gameArea = document.getElementById('game-area');
    
    levelSelection.style.display = 'block'; // Mostrar la selección de niveles
    gameArea.style.display = 'none'; // Ocultar el área de juego cuando se muestran los niveles

    // Desbloquear los niveles alcanzados
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => {
        const levelNumber = parseInt(level.getAttribute('data-level'));

        if (levelNumber <= maxLevelReached) {
            level.classList.remove('locked');
            level.addEventListener('click', () => iniciarNivel(levelNumber));
        }
    });
}

// Función para manejar el inicio del nivel
function iniciarNivel(nivel) {
    level = nivel;
    currentStory = storiesPorNivel[level];
    const gameArea = document.getElementById('game-area');
    const levelSelection = document.getElementById('level-selection');

    if (currentStory) {
        levelSelection.style.display = 'none'; // Ocultar la selección de niveles
        gameArea.style.display = 'block'; // Mostrar el área de juego
        displayStory();
        document.getElementById('question').textContent = currentStory.question;
        document.getElementById('answer').value = ''; // Limpiar la respuesta anterior
    } else {
        document.getElementById('result').textContent = "¡Has completado todas las historias!";
    }
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
        iniciarCuentaRegresiva(20);
    }
}

// Función para iniciar la cuenta regresiva
function iniciarCuentaRegresiva(segundos) {
    let countdownElement = document.getElementById('countdown');

    // Limpiar cualquier intervalo de cuenta regresiva anterior
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownElement.style.display = 'block'; // Mostrar el elemento de la cuenta regresiva
    countdownElement.textContent = `Tiempo restante: ${segundos} segundos`;

    // Iniciar la nueva cuenta regresiva
    countdownInterval = setInterval(() => {
        segundos--;
        countdownElement.textContent = `Tiempo restante: ${segundos} segundos`;

        if (segundos <= 0) {
            clearInterval(countdownInterval); // Detener la cuenta regresiva
            countdownElement.style.display = 'none'; // Ocultar la cuenta regresiva
            mostrarPregunta(); // Mostrar el quiz cuando termine la cuenta regresiva
        }
    }, 1500);
}

// Función para mostrar el quiz después de la historia
function mostrarPregunta() {
    document.getElementById('story').style.display = 'none'; // Ocultar la historia
    document.getElementById('storyImage').style.display = 'none'; // Ocultar la imagen
    document.getElementById('quiz').style.display = 'block'; // Mostrar el quiz
}

// Función para guardar el progreso en la base de datos
function guardarProgreso(nivelDesbloqueado, puntuacionActual) {
    fetch('/ruta/al/servidor/guardar_progreso.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'maxLevelReached': nivelDesbloqueado,
            'score': puntuacionActual
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Progreso guardado exitosamente');
        } else {
            console.error('Error al guardar el progreso:', data.message);
        }
    })
    .catch(error => console.error('Error al hacer la petición:', error));
}

// Función para pasar al siguiente nivel
function nextLevel() {
    score += 10; // Actualizamos la puntuación cuando pasa al siguiente nivel
    document.getElementById('score').textContent = `Puntuación: ${score}`;
    document.getElementById('result').textContent = '';
    
    const nextLevel = parseInt(level) + 1;
    if (storiesPorNivel[nextLevel]) {
        maxLevelReached = Math.max(maxLevelReached, nextLevel); // Actualizar nivel máximo alcanzado
        guardarProgreso(nextLevel, score); // Guardar tanto el nivel como la puntuación en la base de datos
        mostrarNiveles(); // Mostrar los niveles al finalizar un nivel
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

document.getElementById("backToLevels").addEventListener("click", function() {
    document.getElementById("game-area").style.display = "none"; // Ocultar área de juego
    document.getElementById("level-selection").style.display = "block"; // Mostrar niveles
});