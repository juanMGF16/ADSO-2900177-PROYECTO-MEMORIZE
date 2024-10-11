// NIVEL 1
let seleccionada = null;

function seleccionarUno(opcion) {
    const opciones = document.querySelectorAll('.opcion1');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionUno() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelDos.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelUno.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}

  //NIVEL 2

  function seleccionarDos(opcion) {
      const opciones = document.querySelectorAll('.opcion2');
      opciones.forEach(op => op.classList.remove('seleccionada'));
      opcion.classList.add('seleccionada');
      seleccionada = opcion; 
  }

  function validarOpcionDos() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelTres.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelDos.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}
  //NIVEL 3

  function seleccionarTres(opcion) {
    const opciones = document.querySelectorAll('.opcion3');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionTres() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelCuatro.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelTres.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}

  //NIVEL 4

  function seleccionarCuatro(opcion) {
    const opciones = document.querySelectorAll('.opcion4');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionCuatro() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelCinco.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelCuatro.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}


  //NIVEL 5

  function seleccionarCinco(opcion) {
    const opciones = document.querySelectorAll('.opcion5');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}


function validarOpcionCinco() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelSeis.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelCinco.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}



  //NIVEL 6

  function seleccionarSeis(opcion) {
    const opciones = document.querySelectorAll('.opcion6');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionSeis() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelSiete.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelSeis.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}






  //NIVEL 7

  function seleccionarSiete(opcion) {
    const opciones = document.querySelectorAll('.opcion7');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionSiete() {
    if (seleccionada) {
        const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
        if (esCorrecta) {
            // Redirigir a otra página si es correcta
            window.location.href = '../nivelesJuegoVisual/nivelOcho.html'; 
        } else {
            alert('Incorrecto, intenta de nuevo.');
            window.location.href = '../nivelesJuegoVisual/nivelSiete.html';
        }
    } else {
        alert('Por favor selecciona una opción primero.');
    }
}




  //NIVEL 8

  function seleccionarOcho(opcion) {
    const opciones = document.querySelectorAll('.opcion8');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionOcho() {
  if (seleccionada) {
      const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
      if (esCorrecta) {
          // Redirigir a otra página si es correcta
          window.location.href = '../nivelesJuegoVisual/nivelNueve.html'; 
      } else {
          alert('Incorrecto, intenta de nuevo.');
          window.location.href = '../nivelesJuegoVisual/nivelOcho.html';
      }
  } else {
      alert('Por favor selecciona una opción primero.');
  }
}

  //NIVEL 9

  function seleccionarNueve(opcion) {
    const opciones = document.querySelectorAll('.opcion9');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionNueve() {
  if (seleccionada) {
      const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
      if (esCorrecta) {
          // Redirigir a otra página si es correcta
          window.location.href = '../nivelesJuegoVisual/nivelDies.html'; 
      } else {
          alert('Incorrecto, intenta de nuevo.');
          window.location.href = '../nivelesJuegoVisual/nivelNueve.html';
      }
  } else {
      alert('Por favor selecciona una opción primero.');
  }
}
  //NIVEL 10

  function seleccionarDiez(opcion) {
    const opciones = document.querySelectorAll('.opcion10');
    opciones.forEach(op => op.classList.remove('seleccionada'));
    opcion.classList.add('seleccionada');
    seleccionada = opcion; 
}

function validarOpcionDiez() {
  if (seleccionada) {
      const esCorrecta = seleccionada.getAttribute('data-correcta') === 'true';
      if (esCorrecta) {
          // Redirigir a otra página si es correcta
          window.location.href = '../nivelesJuegoVisual/nivelDies.html'; 
      } else {
          alert('Incorrecto, intenta de nuevo.');
          window.location.href = '../nivelesJuegoVisual/nivelDies.html';
      }
  } else {
      alert('Por favor selecciona una opción primero.');
  }
}






