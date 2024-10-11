const form = document.getElementById('word-form');
const wordInput = document.getElementById('word-input');
const inputSection = document.getElementById('input-section');
const startGameSection = document.getElementById('start-game-section');
const originalDisplay = document.getElementById('original-display');
const reorderSection = document.getElementById('reorder-section');
const rectifySection = document.getElementById('rectify-section');
const restartSection = document.getElementById('restart-section');
const originalWordList = document.getElementById('original-word-list');
const sortableList = document.getElementById('sortable-list');
const rectifyButton = document.getElementById('rectify-button');
const restartButton = document.getElementById('restart-button');
const timerDisplay = document.getElementById('timer');
const resultMessage = document.getElementById('result-message'); // Mensaje para mostrar resultados

let words = [];
let randomOrder = [];
let currentOrder = [];
let countdown = 5;  // Tiempo para mostrar el patrón

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputWords = wordInput.value.trim();
    const wordCount = inputWords.split(/,|\s+/).map(word => word.trim()).filter(word => word).length; // Número de palabras ingresadas

    if (inputWords) {
        words = inputWords.split(/,|\s+/).map(word => word.trim()).filter(word => word);
        
        // Restricción: solo se permiten 5 o 10 palabras
        if (wordCount === 5 || wordCount === 10) {
            randomOrder = shuffleArray([...words]);
            displayRandomOrder();
            inputSection.classList.add('hidden');
            startGameSection.classList.remove('hidden');
        } else {
            alert('Por favor, ingresa exactamente 5 o 10 palabras.');
        }
    }
});

document.getElementById('start-game-button').addEventListener('click', function() {
    startGame();
});

function startGame() {
    startGameSection.classList.add('hidden');
    originalDisplay.classList.remove('hidden');
    reorderSection.classList.add('hidden');
    rectifySection.classList.add('hidden');
    resultMessage.classList.add('hidden');
    restartSection.classList.add('hidden');
    startCountdown();
}

function displayRandomOrder() {
    originalWordList.innerHTML = '';
    randomOrder.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        originalWordList.appendChild(listItem);
    });
    currentOrder = randomOrder.slice();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startCountdown() {
    let seconds = countdown;
    const interval = setInterval(function() {
        timerDisplay.textContent = `Memoriza el patrón en: ${seconds} segundos`;
        seconds--;
        if (seconds < 0) {
            clearInterval(interval);
            originalDisplay.classList.add('hidden');
            reorderSection.classList.remove('hidden');
            rectifySection.classList.remove('hidden');
            displayReorderableWords();
        }
    }, 1000);
}

function displayReorderableWords() {
    sortableList.innerHTML = '';
    words.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        sortableList.appendChild(listItem);
    });

    new Sortable(sortableList, {
        animation: 150,
        onEnd: function(evt) {
            currentOrder = Array.from(sortableList.children).map(item => item.textContent.trim());
        }
    });
}

rectifyButton.addEventListener('click', function() {
    const listItems = sortableList.querySelectorAll('li');
    let allCorrect = true;
    listItems.forEach(item => item.classList.remove('highlight'));

    listItems.forEach((item, index) => {
        const userWord = item.textContent.trim().toLowerCase();
        const correctWord = randomOrder[index].trim().toLowerCase();
        if (userWord !== correctWord) {
            item.classList.add('highlight');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        resultMessage.textContent = "¡Correcto! Has ordenado las palabras correctamente.";
        resultMessage.classList.remove('hidden');
        rectifySection.classList.add('hidden');
        restartSection.classList.remove('hidden');
    } else {
        resultMessage.textContent = "Algunas palabras están fuera de orden, inténtalo de nuevo.";
        resultMessage.classList.remove('hidden');
    }
});

restartButton.addEventListener('click', function() {
    location.reload();
});