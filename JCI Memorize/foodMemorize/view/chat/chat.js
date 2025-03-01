const socket = io();

// Función para mostrar/ocultar el chat
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
}

// Enviar mensaje
function enviarMensaje() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && mensaje) {
        socket.emit('mensaje', { nombre, mensaje });
        document.getElementById('mensaje').value = '';
    } else {
        alert('Por favor, ingresa tu nombre y un mensaje');
    }
}

// Mostrar mensajes recibidos
socket.on('mensaje', (data) => {
    const chatMessages = document.getElementById('chatMessages');
    const nuevoMensaje = document.createElement('p');
    nuevoMensaje.innerHTML = `<strong>${data.nombre}:</strong> ${data.mensaje}`;
    chatMessages.appendChild(nuevoMensaje);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Cargar el chat en la página
// async function cargarChat() {
//     const chatHtml = await fetch('chat/index.html').then(res => res.text());
//     document.body.insertAdjacentHTML('beforeend', chatHtml);
//     const styleLink = document.createElement("link");
//     styleLink.rel = "stylesheet";
//     styleLink.href = "chat/chat.css";
//     document.head.appendChild(styleLink);
// }
// cargarChat();
