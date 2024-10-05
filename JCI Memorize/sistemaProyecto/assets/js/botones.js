document.addEventListener('DOMContentLoaded', function() {
  // Función para generar un número aleatorio
  function Numeros() {
    return Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
  }

  // Verifica si ya hay números almacenados en localStorage
  let numero1 = localStorage.getItem('numero1');
  let numero2 = localStorage.getItem('numero2');
  let numero3 = localStorage.getItem('numero3');
  let numero4 = localStorage.getItem('numero4');
  let numero5 = localStorage.getItem('numero5');

  // Si no hay números almacenados, genera nuevos números y almacénalos
  if (!numero1 || !numero2 || !numero3 || !numero4 || !numero5) {
    numero1 = Numeros();
    numero2 = Numeros();
    numero3 = Numeros();
    numero4 = Numeros();
    numero5 = Numeros();

     // Guardar los números en el localStorage
    localStorage.setItem('numero1', numero1);
    localStorage.setItem('numero2', numero2);
    localStorage.setItem('numero3', numero3);
    localStorage.setItem('numero4', numero4);
    localStorage.setItem('numero5', numero5);
  }

  // Crear una fila de botones con los números almacenados
  let botones = `<div class="centrar">
        <div class="col-12 totalBotones">
          <div class="row">
            <div class="col-12">
              <div class="row" id="lista2">
                <div class="col cuadro2"><h4>${numero1}</h4></div>
                <div class="col cuadro2"><h4>${numero2}</h4></div>
                <div class="col cuadro2"><h4>${numero3}</h4></div>
                <div class="col cuadro2"><h4>${numero4}</h4></div>
                <div class="col cuadro2"><h4>${numero5}</h4></div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  document.getElementById('botones').innerHTML = botones;
});
