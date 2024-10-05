document.addEventListener('DOMContentLoaded', function() {
  function shuffleArray(array) {
    for (let iteracion = array.length - 1; iteracion > 0; iteracion--) {
      const jugar = Math.floor(Math.random() * (iteracion + 1));
      [array[iteracion], array[jugar]] = [array[jugar], array[iteracion]];
    }
    return array;
  }

  function getStoredNumbers() {
    return [
      localStorage.getItem('numero1'),
      localStorage.getItem('numero2'),
      localStorage.getItem('numero3'),
      localStorage.getItem('numero4'),
      localStorage.getItem('numero5')
    ];
  }

  function initializeSortable() {
    Sortable.create(document.getElementById('lista2'), {
      animation: 150,
      group: 'shared'
    });
  }

  function checkOrder() {
    const elements = document.querySelectorAll('#lista2 .cuadro2 h4');
    const currentOrder = Array.from(elements).map(el => el.textContent.trim());
    const originalOrder = getStoredNumbers();

    let resultMessage = 'El orden es incorrecto.\n\n';
    let correctPositions = [];
    let incorrectPositions = [];

    originalOrder.forEach((num, index) => {
      if (currentOrder[index] === num) {
        correctPositions.push(`Número ${num} está en el orden correcto en la posición ${index + 1}`);
      } else {
        incorrectPositions.push(`Número ${num} está en la posición incorrecta`);
      }
    });

    if (correctPositions.length === originalOrder.length) {
      resultMessage = '¡Los números están en el orden correcto!';
      window.location.href = 'http://localhost/sistemaProyecto/niveles.php';
    } else {
      resultMessage += correctPositions.join('\n') + '\n' + incorrectPositions.join('\n');
    }

    alert(resultMessage);
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

  // Inicializar Sortable
  initializeSortable();

  // Añadir evento al botón de verificar orden
  document.getElementById('checkOrderButton').addEventListener('click', checkOrder);
});