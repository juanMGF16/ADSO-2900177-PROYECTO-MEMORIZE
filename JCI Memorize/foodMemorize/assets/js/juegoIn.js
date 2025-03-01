const niveles = {
    1: {
        plato: "../../../../assets/img/juegoIntercativo/hamburguesa.jpg",
        ingredientes: [
            { nombre: "Pan Inferior", img: "../../../../assets/img/juegoIntercativo/panInferior.png" },
            { nombre: "Lechuga", img: "../../../../assets/img/juegoIntercativo/lechuga.png" },
            { nombre: "Tomate", img: "../../../../assets/img/juegoIntercativo/tomate.png" },
            { nombre: "Queso", img: "../../../../assets/img/juegoIntercativo/queso.png" },
            { nombre: "Pan Superior", img: "../../../../assets/img/juegoIntercativo/panSuperior.png" }
        ]
    },
    2: {
        plato: "../../../../assets/img/juegoIntercativo/hot_dog/hot_dog.jpg",
        ingredientes: [
            { nombre: "Pan Inferior", img: "../../../../assets/img/juegoIntercativo/hot_dog/pan.png" },
            { nombre: "Salchicha", img: "../../../../assets/img/juegoIntercativo/hot_dog/salchicha.png" },
            { nombre: "Queso", img: "../../../../assets/img/juegoIntercativo/hot_dog/queso.png" },
            { nombre: "Tocino", img: "../../../../assets/img/juegoIntercativo/hot_dog/tocino.png" },
            { nombre: "Salsas", img: "../../../../assets/img/juegoIntercativo/hot_dog/salsas.png" }
        ]
    },
    3: {
        plato: "../../../../assets/img/juegoIntercativo/tortilla/taco.jpeg",
        ingredientes: [
            { nombre: "Tortilla", img: "../../../../assets/img/juegoIntercativo/tortilla/tortilla.png" },
            { nombre: "Carne", img: "../../../../assets/img/juegoIntercativo/tortilla/carne.png" },
            { nombre: "Cebolla", img: "../../../../assets/img/juegoIntercativo/tortilla/cebolla.png" },
            { nombre: "Cilantro", img: "../../../../assets/img/juegoIntercativo/tortilla/cilantro.png" },
            { nombre: "Salsa", img: "../../../../assets/img/juegoIntercativo/tortilla/salsa.png" }
        ]
    },
    4: {
        plato: "../../../../assets/img/juegoIntercativo/pizza/pizza.jpg",
        ingredientes: [
            { nombre: "Masa", img: "../../../../assets/img/juegoIntercativo/pizza/masa.png" },
            { nombre: "Salsa", img: "../../../../assets/img/juegoIntercativo/pizza/salsa.png" },
            { nombre: "Queso", img: "../../../../assets/img/juegoIntercativo/pizza/queso.png" },
            { nombre: "Pepperoni", img: "../../../../assets/img/juegoIntercativo/pizza/peperoni.png" },
            { nombre: "Pimientos", img: "../../../../assets/img/juegoIntercativo/pizza/pimienta.png" }
        ]
    },
    5: {
        plato: "../../../../assets/img/juegoIntercativo/ensalada/ensalada.jpg",
        ingredientes: [
            { nombre: "Lechuga", img: "../../../../assets/img/juegoIntercativo/ensalada/lechuga.png" },
            { nombre: "Tomate", img: "../../../../assets/img/juegoIntercativo/ensalada/tomate.png" },
            { nombre: "Cebolla", img: "../../../../assets/img/juegoIntercativo/ensalada/cebolla.png" },
            { nombre: "Aceitunas", img: "../../../../assets/img/juegoIntercativo/ensalada/aceitunas.png" },
            { nombre: "Vinagreta", img: "../../../../assets/img/juegoIntercativo/ensalada/vinagreta.png" }
        ]
    }
};

let currentLevel = 1;

function startLevel(level) {
    if (level > Object.keys(niveles).length) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Nivel no disponible',
            customClass: {
              popup: 'alerta',  
              confirmButton: 'custom-button'
            }
          });
        return;
    }

    // Reiniciar contenedores y variables para el nuevo nivel
    document.getElementById("menu-ingredients").innerHTML = ""; // Limpia el menú del nivel anterior
    document.getElementById("ingredient-list").innerHTML = ""; // Limpia la lista de ingredientes del nivel anterior
    document.getElementById("contenedor-ordenado").innerHTML = ""; // Limpia las zonas de orden del nivel anterior
    document.getElementById("plato-imagen").src = ""; // Limpia la imagen del plato
    document.getElementById("validateOrderBtn").classList.add("oculto"); // Oculta el botón de validar orden

    currentLevel = level;
    document.getElementById("level-selection").classList.add("oculto");
    document.getElementById("level-selection2").classList.add("oculto");
    document.getElementById("game-area").classList.remove("oculto");

    // Mostrar menú inicial y después de 6 segundos, muestra el área de juego
    displayMenu();
    setTimeout(() => {
        document.getElementById("menu-container").classList.add("oculto"); // Oculta el menú después de 6 segundos
        document.getElementById("sección-de-ingredientes").classList.remove("oculto");
        document.getElementById("sección-ordenada").classList.remove("oculto");
        document.getElementById("validateOrderBtn").classList.remove("oculto");

        displayIngredients();
        createDropZones();
    }, 6000);
}

function displayMenu() {
    document.getElementById("menu-container").classList.remove("oculto"); // Asegurarse de que el menú esté visible
    document.getElementById("plato-imagen").src = niveles[currentLevel].plato;

    const menuIngredients = document.getElementById("menu-ingredients");
    menuIngredients.innerHTML = ""; // Limpiar el menú

    niveles[currentLevel].ingredientes.forEach((ingredient) => {
        const ingredientElement = document.createElement("div");
        ingredientElement.classList.add("ingredient", "d-inline-flex", "align-items-center", "mr-3");

        const img = document.createElement("img");
        img.src = ingredient.img;
        img.alt = ingredient.nombre;
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.marginRight = "5px";

        const nameLabel = document.createElement("span");
        nameLabel.textContent = ingredient.nombre;

        ingredientElement.appendChild(img);
        ingredientElement.appendChild(nameLabel);
        menuIngredients.appendChild(ingredientElement);
    });
}

function displayIngredients() {
    const ingredientList = document.getElementById("ingredient-list");
    ingredientList.innerHTML = "";
    const shuffledOrder = [...niveles[currentLevel].ingredientes].sort(() => 0.5 - Math.random());

    shuffledOrder.forEach((ingredient) => {
        const ingredientElement = document.createElement("div");
        ingredientElement.classList.add("ingredient");
        ingredientElement.draggable = true;
        ingredientElement.dataset.nombre = ingredient.nombre;
        ingredientElement.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", ingredient.img);
            e.dataTransfer.setData("nombre", ingredient.nombre);
        });

        const img = document.createElement("img");
        img.src = ingredient.img;
        img.alt = ingredient.nombre;
        ingredientElement.appendChild(img);
        ingredientList.appendChild(ingredientElement);
    });
}

function createDropZones() {
    const orderedContainer = document.getElementById("contenedor-ordenado");
    orderedContainer.innerHTML = "";
    niveles[currentLevel].ingredientes.forEach((_, index) => {
        const dropZone = document.createElement("div");
        dropZone.classList.add("drop-zone");
        dropZone.dataset.index = index;

        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            const imgSrc = e.dataTransfer.getData("text/plain");
            const nombre = e.dataTransfer.getData("nombre");
            const ingredientElement = document.createElement("div");
            ingredientElement.classList.add("ingredient");
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = nombre;
            ingredientElement.appendChild(img);
            dropZone.innerHTML = ""; // Limpiar el drop zone
            dropZone.appendChild(ingredientElement);
        });

        orderedContainer.appendChild(dropZone);
    });
}

function validateOrder() {
    const dropZones = document.querySelectorAll(".drop-zone");
    const correctOrder = niveles[currentLevel].ingredientes.map(ing => ing.nombre);
    const userOrder = Array.from(dropZones).map(dropZone => {
        const img = dropZone.querySelector("img");
        return img ? img.alt : null;
    });

    if (JSON.stringify(correctOrder) === JSON.stringify(userOrder)) {
        Swal.fire({
            icon: "success",
            title: '!Orden Correcto¡',
            showConfirmButton: false,
             timer: 1500,
            customClass: {
              popup: 'alerta',  
              confirmButton: 'custom-button'
            }
          });
        guardarProgreso(currentLevel); // Aquí se llama la función para guardar el progreso
        unlockNextLevel();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Orden incorrecto.',
            text: ' Inténtalo de nuevo.',
            customClass: {
              popup: 'alerta',  
              confirmButton: 'custom-button'
            }
          });
    }
}


function unlockNextLevel() {
    if (currentLevel < Object.keys(niveles).length) {
        const nextLevelBtn = document.getElementById(`level-${currentLevel + 1}-btn`);
        nextLevelBtn.disabled = false;
        nextLevelBtn.classList.remove("btn-secondary");
        nextLevelBtn.classList.add("btn-primary");
        nextLevelBtn.style.opacity = "1"; // Quita la opacidad
        nextLevelBtn.style.cursor = "pointer"; // Cambia el cursor a puntero
    }
    redirectToLevelSelection();
}

function redirectToLevelSelection() {
    document.getElementById("game-area").classList.add("oculto");
    document.getElementById("sección-de-ingredientes").classList.add("oculto");
    document.getElementById("sección-ordenada").classList.add("oculto");
    document.getElementById("validateOrderBtn").classList.add("oculto");
    document.getElementById("level-selection").classList.remove("oculto");
    document.getElementById("level-selection2").classList.remove("oculto");
}

async function guardarProgreso(level) {
    try {
        console.log("Intentando guardar el progreso para el nivel:", level);

        const response = await fetch('../../../../assets/lib/persona/sesion.php');
        const data = await response.json();

        if (data.success) {
            const userId = data.personaId;
            console.log("ID del usuario:", userId);

            const saveResponse = await fetch('../../../../assets/lib/guardar_progreso.php', {
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

        // Verificar la sesión del usuario
        const response = await fetch('../../../../assets/lib/persona/sesion.php');
        const data = await response.json();

        if (data.success) {
            const userId = data.personaId;
            console.log("ID del usuario:", userId);

            // Solicitar el progreso desde cargar_progreso.php
            const loadResponse = await fetch('../../../../assets/lib/persona/cargar_progreso.php', {
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

                // Desbloquear niveles hasta el último completado
                for (let i = 1; i <= nivelDesbloqueado; i++) {
                    const levelBtn = document.getElementById(`level-${i}-btn`);
                    levelBtn.disabled = false;
                    levelBtn.classList.remove("btn-secondary");
                    levelBtn.classList.add("btn-primary");
                    levelBtn.style.opacity = "1";
                    levelBtn.style.cursor = "pointer";
                }
            } else {
                console.error("Error al cargar el progreso:", loadData.message);
            }

            // Mostrar la selección de niveles en lugar de iniciar el nivel directamente
            document.getElementById("level-selection").classList.remove("oculto");
            document.getElementById("game-area").classList.add("oculto");
        } else {
            console.error("Usuario no autenticado.");
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error al cargar progreso:', error);
    }
}

// Modificar el comportamiento del botón de cada nivel
function startLevel(level) {
    if (level > Object.keys(niveles).length) {
        Swal.fire({
            icon: 'warning',
            title: 'Nivel',
            text: 'Nivel no disponible',
            customClass: {
              popup: 'alerta',  
              confirmButton: 'custom-button'
            }
          });
        return;
    }

    currentLevel = level;
    document.getElementById("level-selection").classList.add("oculto");
    document.getElementById("game-area").classList.remove("oculto");

    // Lógica para iniciar el nivel
    displayMenu();
    setTimeout(() => {
        document.getElementById("menu-container").classList.add("oculto");
        document.getElementById("sección-de-ingredientes").classList.remove("oculto");
        document.getElementById("sección-ordenada").classList.remove("oculto");
        document.getElementById("validateOrderBtn").classList.remove("oculto");

        displayIngredients();
        createDropZones();
    }, 6000);
}

// Llamar a cargarProgreso cuando la página cargue
cargarProgreso();

