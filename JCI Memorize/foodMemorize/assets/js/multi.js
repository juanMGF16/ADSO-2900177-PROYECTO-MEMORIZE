// NIVEL 1
let seleccionada = null;
let currentLevel = 1;
let puntaje = 0;
const niveles = {
    1: {
        imagen: "../../../../assets/img/juegoMulti/ronda(1).jpeg",
        opciones: [
            { img: "../../../../assets/img/juegoMulti/ronda(1).jpeg", correcta: true },
            { img: "../../../../assets/img/juegoMulti/ronda(1.1).jpeg", correcta: false },
            { img: "../../../../assets/img/juegoMulti/ronda(1.2).jpeg", correcta: false }
        ]
    },
    2: {
        imagen: "../../../../assets/img/juegoMulti/ronda(2).jpeg",
        opciones: [
            { img: "../../../../assets/img/juegoMulti/ronda(2.1).jpeg", correcta: false },
            { img: "../../../../assets/img/juegoMulti/ronda(2).jpeg", correcta: true },
            { img: "../../../../assets/img/juegoMulti/ronda(2.2).jpeg", correcta: false }
        ]
    },
    3: {
        imagen: "../../../../assets/img/juegoMulti/ronda(3).jpeg",
        opciones: [
            { img: "../../../../assets/img/juegoMulti/ronda(3).jpeg", correcta: true },
            { img: "../../../../assets/img/juegoMulti/ronda(3.1).jpeg", correcta: false },
            { img: "../../../../assets/img/juegoMulti/ronda(3.2).jpeg", correcta: false }
        ]
    },
    4: {
        imagen: "../../../../assets/img/juegoMulti/ronda(4).jpeg",
        opciones: [
            { img: "../../../../assets/img/juegoMulti/ronda(4.1).jpeg", correcta: false },
            { img: "../../../../assets/img/juegoMulti/ronda(4).jpeg", correcta: true },
            { img: "../../../../assets/img/juegoMulti/ronda(4.2).jpeg", correcta: false }
        ]
    },
    5: {
        imagen: "../../../../assets/img/juegoMulti/ronda(5).jpeg",
        opciones: [
            { img: "../../../../assets/img/juegoMulti/ronda(5.1).jpeg", correcta: false },
            { img: "../../../../assets/img/juegoMulti/ronda(5.1).jpeg", correcta: false },
            { img: "../../../../assets/img/juegoMulti/ronda(5).jpeg", correcta: true }
        ]
    },
};

document.addEventListener('DOMContentLoaded', () => {
    startLevel(1); // Iniciar el primer nivel por defecto
});

// Asegúrate de que las interacciones de los botones no interfieran y que se inicie el nivel inmediatamente
function startLevel(level) {
    console.log(`Iniciando nivel: ${level}`);
    if (niveles[level]) {
        currentLevel = level;

        // Mostrar carga completa sin interrumpir la transición
        mostrarCargaCompleta();
    } else {
        console.error(`El nivel ${level} no existe en el objeto niveles.`);
    }
}

function limpiarInterfazActual() {
    const selectionMenu = document.getElementById("selectionMenu");
    const gameOptions = document.getElementById("gameOptions");
    const validateButton = document.getElementById("validateButton");

    // Oculta o limpia elementos de la interfaz actual
    selectionMenu.classList.add("oculto");
    gameOptions.classList.add("oculto");
    validateButton.classList.add("oculto");
}

function cargarBarraDeCarga() {
    const loadingBarContainer = document.getElementById('containere');
    const loadingBar = document.getElementById("loading-bar1");

    // Mostrar el contenedor de la barra de carga sin esperar
    loadingBarContainer.classList.remove("oculto");

    loadingBar.style.width = '100%';
    loadingBar.style.backgroundColor = '#00ff00'; // Color verde para carga completa

    setTimeout(function() {
        loadingBar.style.width = '50%';
        loadingBar.style.backgroundColor = '#ffff00'; // Color amarillo para carga intermedia

        setTimeout(function() {
            loadingBar.style.width = '10%';
            loadingBar.style.backgroundColor = '#ff0000'; // Color rojo para carga baja

            setTimeout(function() {
                // Después de la carga, muestra el menú del juego y otras interfaces
                loadingBarContainer.classList.add("oculto");
                document.getElementById("hiddenImage").classList.add("oculto");
                document.getElementById("hiddenMenu").classList.add("oculto");
                document.getElementById('selectionMenu').classList.remove("oculto");
                document.getElementById('validateButton').classList.remove("oculto");
                document.getElementById('gameOptions').classList.remove("oculto");

                cargarNivel(currentLevel); // Llama a la función para cargar el nivel
            }, 2000); // Retardo para simular carga completa
        }, 2000); // Retardo para carga intermedia
    }, 2000); // Retardo para carga inicial
}

function mostrarCargaCompleta() {
    console.log('Iniciando carga completa...');
    const loadingContainer = document.getElementById("containere");
    const hiddenImageContainer = document.getElementById("hiddenImage");
    const hiddenMenu = document.getElementById("hiddenMenu");

    loadingContainer.classList.remove("oculto");
    hiddenImageContainer.classList.remove("oculto");
    hiddenMenu.classList.remove("oculto");

    const imagenElement = document.querySelector("#hiddenImage img");
    imagenElement.src = niveles[currentLevel].imagen;

    cargarBarraDeCarga(); // Muestra la barra de carga sin retraso
}

function cargarNivel(nivel) {
    if (niveles[nivel]) { 
        mostrarOpciones(nivel); 
    } else {
        console.error(`El nivel ${nivel} no existe en el objeto niveles.`);
    }
}

function mostrarOpciones(nivel) {
    const nivelData = niveles[nivel];
    if (!nivelData) {
        console.error(`El nivel ${nivel} no está definido.`);
        return;
    }

    const gameOptions = document.getElementById("gameOptions");
    const loadingContainer = document.getElementById("containere");
    const hiddenImageContainer = document.getElementById("hiddenImage");
    const hiddenImageElement = hiddenImageContainer.querySelector("img"); 
    const hiddenMenu = document.getElementById("hiddenMenu");
    const selectionMenu = document.getElementById("selectionMenu");

    loadingContainer.classList.add("oculto");
    hiddenMenu.classList.add("oculto");
    selectionMenu.classList.remove("oculto"); 

    hiddenImageElement.src = nivelData.imagen; 
    hiddenImageContainer.classList.add("oculto"); 

    gameOptions.innerHTML = ''; 

    const opciones = nivelData.opciones; 
    if (Array.isArray(opciones) && opciones.length > 0) {
        opciones.forEach(opciones => {
            const imgElement = document.createElement('img');
            imgElement.src = opciones.img; 
            imgElement.className = "opcion1 img-fluid"; 
            imgElement.style.cursor = "pointer"; 
            imgElement.setAttribute("data-correcta", opciones.correcta); 
            imgElement.onclick = () => seleccionarUno(imgElement); 
            gameOptions.appendChild(imgElement); 
        });
    } else {
        console.error("No hay imágenes disponibles para mostrar.");
    }

    gameOptions.classList.remove("oculto"); 
}

// Definición de la función seleccionarUno
function seleccionarUno(imgElement) {
   
    if (seleccionada) {
        seleccionada.classList.remove("seleccionada");
    }

    seleccionada = imgElement;
    seleccionada.classList.add("seleccionada");

    // Comprobación de si la imagen seleccionada es correcta o no
    const esCorrecta = imgElement.getAttribute("data-correcta") === "true";
    if (esCorrecta) {
        console.log("¡Seleccionaste un ingrediente correcto!");
    } else {
        console.log("¡Seleccionaste un ingrediente incorrecto!");
    }
}

function validarOpcionUno() {
    console.log("Validando opción...");
    if (!seleccionada) {
        Swal.fire({
            icon: 'warning',
            title: 'Por favor',
            text: 'Selecciona alguna opción',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'alerta',
                confirmButton: 'custom-button'
            }
        });
        return;
    }

    const correcta = seleccionada.getAttribute("data-correcta") === "true";
    console.log(`La opción seleccionada es ${correcta ? "correcta" : "incorrecta"}.`);
    
    // Definir puntos
    let puntaje = 0;

    if (correcta) {
        puntaje = 10; // Asignar puntos por respuesta correcta
        Swal.fire({
            icon: 'success',
            title: '¡Correcto!',
            text: `Has acertado, ganaste ${puntaje} puntos.`,
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: 'alerta',
                confirmButton: 'custom-button'
            }
        }).then(() => {
            guardarProgreso(currentLevel, puntaje);
            avanzarNivel();
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Incorrecto',
            text: 'No te preocupes, intenta de nuevo.',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: 'alerta',
                confirmButton: 'custom-button'
            }
        }).then(() => {
            guardarProgreso(currentLevel, puntaje);
            avanzarNivel();
        });
    }
}

function avanzarNivel() {
    // Incrementa el nivel
    currentLevel++;

    // Verifica si hay más niveles
    if (currentLevel <= Object.keys(niveles).length) {
        startLevel(currentLevel);  // Iniciar el siguiente nivel
        limpiarInterfazActual();
    } else {
        // Si todos los niveles se han completado, redirigir al podio
        Swal.fire({
            icon: 'success',
            title: '¡Has completado todas las rondas!',
            text: '¡Felicidades por tu esfuerzo!',
            showConfirmButton: false,
            timer: 2000,
        }).then(() => {
            window.location.href = '../../tablaClasificacion/podio.html';  // Redirigir al podio
        });
    }
}

async function guardarProgreso(level, puntaje) {
    try {
        console.log("Intentando guardar el progreso para el nivel:", level, "con puntaje:", puntaje);

        // Obtener los datos de la sesión del usuario
        const response = await fetch('../../../../assets/lib/persona/sesion.php');
        const data = await response.json();

        if (data.success) {
            const userId = data.personaId;
            console.log("ID del usuario:", userId);

            // Enviar el puntaje y el nivel al servidor
            const saveResponse = await fetch('../../../../assets/lib/guardar_progreso_Multi.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, level, puntaje })
            });

            // Mostrar la respuesta en texto para diagnóstico
            const textResponse = await saveResponse.text();
            console.log("Respuesta del servidor (como texto):", textResponse);

            // Asegurarse de que la respuesta sea válida JSON
            try {
                const saveData = JSON.parse(textResponse);
                console.log('Respuesta al guardar progreso:', saveData);

                if (saveData.success) {
                    console.log("Progreso guardado correctamente.");
                } else {
                    console.error("Error al guardar el progreso:", saveData.message);
                }
            } catch (jsonError) {
                console.error('Error al parsear JSON:', jsonError);
                console.log('Respuesta no es un JSON válido');
            }
        } else {
            console.error("Usuario no autenticado.");
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error al guardar progreso:', error);
    }
}