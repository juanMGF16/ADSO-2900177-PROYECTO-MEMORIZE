document.addEventListener('DOMContentLoaded', function () {
  // Función para desordenar los números (mezclar)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Obtener los números almacenados en el localStorage
  function getStoredNumbers() {
    return [
      '1', '2', '3', '4', '5' // Puedes ajustar estos números como sea necesario.
    ];
  }

  // Inicializar el plugin SortableJS
  function initializeSortable() {
    Sortable.create(document.getElementById('lista2'), {
      animation: 150,
      group: 'shared'
    });
  }

  // Función para verificar el orden de los números
  function checkOrder() {
    const elements = document.querySelectorAll('#lista2 .cuadro2 h4');
    const currentOrder = Array.from(elements).map(el => el.textContent.trim());
    const originalOrder = getStoredNumbers();

    let allCorrect = true;

    elements.forEach((el, index) => {
      el.parentElement.classList.remove('incorrecto', 'correcto'); // Limpiar clases previas

      if (currentOrder[index] === originalOrder[index]) {
        el.parentElement.classList.add('correcto'); // Añadir clase si está correcto
      } else {
        el.parentElement.classList.add('incorrecto'); // Añadir clase si está incorrecto
        allCorrect = false;
      }
    });

    if (allCorrect) {
      alert('¡Los números están en el orden correcto!');
      // Redirigir o hacer algo más si todos son correctos
      // window.location.href = 'http://localhost/sistemaProyecto/niveles.php'; // Redirigir si se desea
    } else {
      alert('El orden es incorrecto. Revisa los números en rojo.');
    }
  }

  // Desorganizar números y mostrarlos
  let storedNumbers = getStoredNumbers();
  storedNumbers = shuffleArray(storedNumbers);

  let botones = `<div class="centrar">
        <div class="col-12 totalBotones">
          <div class="row" id="lista2">
            ${storedNumbers.map(num => `<div class="col cuadro2"><h4>${num}</h4></div>`).join('')}
          </div>
        </div>
      </div>`;

  document.getElementById('botones').innerHTML = botones;

  // Inicializar SortableJS para que los números se puedan reordenar
  initializeSortable();

  // Añadir evento al botón de verificar orden
  document.getElementById('checkOrderButton').addEventListener('click', checkOrder);
});
