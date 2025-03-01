const ws = new WebSocket("ws://localhost:8080/game");
let currentRoom = null;
let isHost = false;
let username = null;

// Manejo de eventos WebSocket
ws.onopen = () => console.log("Conectado al servidor WebSocket");
ws.onmessage = (event) => handleWebSocketMessage(JSON.parse(event.data));
ws.onclose = () => console.log("Desconectado del servidor WebSocket");

// Función para manejar mensajes entrantes del WebSocket
function handleWebSocketMessage(data) {
    const actions = {
        'room_created': () => handleRoomCreated(data.roomCode),
        'joined_room': () => handleRoomJoined(data.roomCode),
        'chat': () => displayChatMessage(data.message, data.sender),
        'game_started': () => {alert(data.message);window.location.href = "./JuegoVisualCMulti/nivelesJuegoVisual/Multi.html"; // O el archivo adecuado para tu juego
},

        'notification': () => console.log(data.message),
        'error': () => alert(`Error: ${data.message}`),
    };

    (actions[data.action] || (() => console.warn("Acción desconocida:", data.action)))();
}

// Crear una sala
function createRoom() {
    ws.send(JSON.stringify({ action: 'create_room' }));
}

// Unirse a una sala
function joinRoom() {
    const roomCode = document.getElementById('roomCode').value.trim();
    if (!roomCode) return Swal.fire('Por favor, introduce un código de sala.');
    ws.send(JSON.stringify({ action: 'join_room', roomCode }));
}

// Iniciar el juego (solo anfitrión)
function startGame() {
    if (!currentRoom) return Swal.fire('No hay una sala activa.');
    if (!isHost) return Swal.fire('Solo el anfitrión puede iniciar el juego.');
    ws.send(JSON.stringify({ action: 'start_game', roomCode: currentRoom }));
}


// Manejo de la creación de sala
function handleRoomCreated(roomCode) {
    currentRoom = roomCode;
    isHost = true;
    updateRoomUI(roomCode);
    Swal.fire(`Sala creada.`);;
}

// Manejo de unión a sala
function handleRoomJoined(roomCode) {
    currentRoom = roomCode;
    isHost = false;
    updateRoomUI(roomCode);
    Swal.fire(`Te uniste a la sala: ${roomCode}`);
}

// Actualizar la interfaz de la sala
function updateRoomUI(roomCode) {
    // Ocultar opciones iniciales y mostrar detalles de la sala
    toggleVisibility('initialOptions', false);
    toggleVisibility('roomDetails', true);
    toggleVisibility('chat', true);
    // Asegúrate de que este contenedor está visible
    toggleVisibility('chatMessages', true);

    document.getElementById('roomCodeDisplay').textContent = `Código de la sala: ${roomCode}`;

    // Agregar botón "Iniciar Juego" si es el anfitrión
    const startButton = document.getElementById('startGameButton');
    if (isHost && !startButton) {
        const button = document.createElement('button');
        button.id = 'startGameButton';
        button.className = 'btn btn-primary mt-3';
        button.textContent = 'Iniciar Juego';
        button.onclick = startGame;
        document.getElementById('roomDetails').appendChild(button);
    }
}

// Enviar mensaje de chat
function sendMessage() {
    const message = document.getElementById('chatMessage').value.trim();
    if (!currentRoom || !message) return Swal.fire('El mensaje está vacío o no hay una sala activa.');
    if (!username) return Swal.fire('No se ha cargado el nombre del usuario. Intenta recargar la página.');

    ws.send(JSON.stringify({
        action: 'chat',
        roomCode: currentRoom,
        message,
        sender: username
    }));

    // Limpiar campo de entrada
    document.getElementById('chatMessage').value = '';
}

// Mostrar mensajes en el chat
function displayChatMessage(message, sender) {
    const chatContainer = document.getElementById('chatMessages');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender || 'Desconocido'}: ${message}`;
    messageElement.classList.add('mb-1');
    chatContainer.appendChild(messageElement);

    // Auto-scroll hacia el último mensaje
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Obtener datos del usuario
async function obtenerDatosUsuario() {
    try {
        const response = await fetch('../../assets/lib/persona/sesion.php');
        const data = await response.json();

        if (data.success) {
            username = data.personaNombre; // Asigna el nombre del usuario
            const nombreUsuarioElement = document.getElementById('nombreUsuario');
            if (nombreUsuarioElement) {
                nombreUsuarioElement.textContent = username; // Muestra el nombre en la interfaz
            }
        } else {
            console.warn('Usuario no autenticado, redirigiendo...');
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        alert('Hubo un problema al autenticar tu sesión. Intenta recargar la página.');
    }
}


// Mostrar u ocultar elementos por ID
function toggleVisibility(elementId, isVisible) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('d-none', !isVisible);
    }
}

// Inicializar datos del usuario si corresponde
if (document.getElementById('nombreUsuario')) {
    obtenerDatosUsuario();
}
