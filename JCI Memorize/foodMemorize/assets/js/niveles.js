// NIVEL 1
let seleccionada = null;
let currentLevel = 1;
const niveles = {
    1: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(1).webp",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(1).webp", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(1).png", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(1.1).png", correcta: false }
        ]
    },
    2: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(2).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(2.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(2).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(2.2).jpg", correcta: false }
        ]
    },
    3: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(3).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(3).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(3.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(3.2).jpg", correcta: false }
        ]
    },
    4: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(4).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(4.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(4.2).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(4).jpeg", correcta: true }
        ]
    },
    5: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(5).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(5.2).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(5.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(5).jpeg", correcta: true }
        ]
    },
    6: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(6).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(6.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(6).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(6.2).jpg", correcta: false }
        ]
    },
    7: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(7).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(7.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(7).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(7.2).jpg", correcta: false }
        ]
    },
    8: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(8).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(8).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(8.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(8.2).jpg", correcta: false }
        ]
    },
    9: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(9).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(9).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(9.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(9.2).jpg", correcta: false }
        ]
    },
    10: {
        imagen: "../../../../../assets/img/JuegoVisual/nivel(10).jpeg",
        opciones: [
            { img: "../../../../../assets/img/JuegoVisual/nivel(10.1).jpg", correcta: false },
            { img: "../../../../../assets/img/JuegoVisual/nivel(10).jpeg", correcta: true },
            { img: "../../../../../assets/img/JuegoVisual/nivel(10.2).jpg", correcta: false }
        ]
    },
   
};

// Inicia un nivel
function startLevel(level) {
    console.log(`Iniciando nivel: ${level}`);
    if (niveles[level]) {
        currentLevel = level; // Asegúrate de que esto esté correcto
        ocultarMenuBotones();
        mostrarCargaCompleta();
    } else {
        console.error(`El nivel ${level} no existe en el objeto niveles.`);
    }
}


// Oculta el menú de botones
function ocultarMenuBotones() {
    const encabezado = document.getElementById("Encabezado");
    const nivelButtons = document.getElementById("nivelButtons");
    const nivelButtons1 = document.getElementById("nivelButtons1");

    encabezado.classList.add("oculto"); 
    nivelButtons.classList.add("oculto");
    nivelButtons1.classList.add("oculto");
}

function mostrarCargaCompleta() {
    const loadingContainer = document.getElementById("containere");
    const hiddenImageContainer = document.getElementById("hiddenImage");
    const hiddenMenu = document.getElementById("hiddenMenu");
    
    loadingContainer.classList.remove("oculto"); 
    hiddenImageContainer.classList.remove("oculto"); 
    hiddenMenu.classList.remove("oculto"); 

    const imagenElement = document.querySelector("#hiddenImage img");
    imagenElement.src = niveles[currentLevel].imagen; 

   
    cargarBarraDeCarga(); 
}

// Función para cargar la barra de carga
function cargarBarraDeCarga() {
    const loadingBarContainer = document.getElementById('containere');
    const loadingBar = document.getElementById("loading-bar1");

    // Mostrar el contenedor de la barra de carga
    loadingBarContainer.classList.remove("oculto");

    loadingBar.style.width = '100%'; 
    loadingBar.style.backgroundColor = '#00ff00'; 

    setTimeout(function() {
        loadingBar.style.width = '50%'; 
        loadingBar.style.backgroundColor = '#ffff00'; 

        setTimeout(function() {
            loadingBar.style.width = '10%'; 
            loadingBar.style.backgroundColor = '#ff0000'; 

            setTimeout(function() {
                loadingBarContainer.classList.add("oculto");
                document.getElementById("hiddenImage").classList.add("oculto");
                document.getElementById("hiddenMenu").classList.add("oculto");
                document.getElementById('selectionMenu').classList.remove("oculto");
                document.getElementById('validateButton').classList.remove("oculto");
                document.getElementById('gameOptions').classList.remove("oculto");

               
                cargarNivel(currentLevel); 
            }, 2000); 
        }, 2000); 
    }, 2000);
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

// Valida la opción seleccionada
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
    
    if (correcta) {
        desbloquearNivel();
        setTimeout(() => {
            mostrarNiveles(); 
        }, 1000);
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Incorrecto',
            text: 'Intentalo Nueva Mente',
            showConfirmButton: false,
            timer: 1000,
            customClass: {
                popup: 'alerta',  
                confirmButton: 'custom-button'
            }
        });
        setTimeout(() => {
            mostrarNiveles();  // Redirigir al menú de niveles si la opción es incorrecta
        }, 1000);
    }
}

// Desbloquear el siguiente nivel si corresponde
function desbloquearNivel() {
    console.log(`Nivel actual antes de desbloquear: ${currentLevel}`);
    const totalNiveles = Object.keys(niveles).length; // Total de niveles

    if (currentLevel < totalNiveles) {
        currentLevel++; 
        const nextLevelBtn = document.getElementById(`nivel${currentLevel}Btn`);
        
        if (nextLevelBtn) {
            nextLevelBtn.disabled = false; // Desbloquear el siguiente nivel
            Swal.fire({
                icon: "success",
                title: `¡Nivel ${currentLevel} desbloqueado!`,
                showConfirmButton: false,
                timer: 1000,
                customClass: {
                  popup: 'alerta',  
                }
              })
            
            // Guardar progreso al desbloquear el nivel
            guardarProgreso(currentLevel);
            console.log(`Progreso guardado para el nivel: ${currentLevel}`);
        } else {
            console.error(`No se encontró el botón para el nivel ${currentLevel}`);
        }
    } else {
        console.log("Ya has desbloqueado todos los niveles disponibles.");
    }
}

// Muestra el menú de niveles
function mostrarNiveles() {
    const menu = document.getElementById("selectionMenu");
    const opciones = document.getElementById("gameOptions");
    const menuEncabezado = document.getElementById("Encabezado");
    const botones = document.getElementById("nivelButtons"); 
    const botones1 = document.getElementById("nivelButtons1"); 
    const validar = document.getElementById("validateButton");

    menu.classList.add("oculto"); 
    opciones.classList.add("oculto"); 
    validar.classList.add("oculto");
    menuEncabezado.classList.remove("oculto"); 
    botones.classList.remove("oculto");
    botones1.classList.remove("oculto");
}

// Función para guardar el progreso del usuario
async function guardarProgreso(level) {
    try {
        console.log("Intentando guardar el progreso para el nivel:", level);

        const response = await fetch('../../../../../assets/lib/persona/sesion.php');
        const data = await response.json();

        if (data.success) {
            const userId = data.personaId;
            console.log("ID del usuario:", userId);

            const saveResponse = await fetch('../../../../../assets/lib/guardar_progreso_visual.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, level })
            });

            const saveData = await saveResponse.json();
            console.log("Respuesta al guardar progreso:", saveData);
            
            if (saveData.success) {
                console.log("Progreso guardado correctamente.");
            } else {
                console.error("Error al guardar el progreso:", saveData.message);
            }
        } else {
            console.error("Usuario no autenticado.");
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error al guardar progreso:', error);
    }
}

async function cargarProgreso() {
    try {
        console.log("Intentando cargar el progreso del usuario.");

        
        const response = await fetch('../../../../../assets/lib/persona/sesion.php');
        const data = await response.json();

        if (data.success) {
            const userId = data.personaId;
            console.log("ID del usuario:", userId);

          
            const loadResponse = await fetch('../../../../../assets/lib/persona/cargar_progreso_Visual.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId })
            });

            const loadData = await loadResponse.json();
            console.log("Respuesta al cargar progreso:", loadData);

            if (loadData.success) {
                const nivelDesbloqueado = loadData.nivel;
                console.log("Último nivel desbloqueado:", nivelDesbloqueado);

                // Desbloquear los niveles hasta el nivel desbloqueado
                for (let i = 1; i <= nivelDesbloqueado; i++) {
                    const nivelButton = document.getElementById(`nivel${i}Btn`);
                    if (nivelButton) {
                        nivelButton.disabled = false;
                    }
                }

               
                currentLevel = nivelDesbloqueado;
            } else {
                console.error("Error al cargar el progreso:", loadData.message);
            }
        } else {
            console.error("Usuario no autenticado.");
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error al cargar progreso:', error);
    }
}

 cargarProgreso(); 
