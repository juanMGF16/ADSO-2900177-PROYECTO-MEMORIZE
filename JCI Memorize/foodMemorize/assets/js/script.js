fetch('../../../assets/lib/persona/sesion.php')
  .then(response => response.text()) // Lee la respuesta como texto primero
  .then(text => {
    console.log('Respuesta del servidor:', text); // Registra la respuesta completa
    try {
      return JSON.parse(text); // Intenta parsear como JSON
    } catch (error) {
      console.error('Error al parsear JSON:', error);
      throw new Error('La respuesta no es JSON válido');
    }
  })
  .then(data => {
    console.log('Datos parseados:', data);
    if (data.success) {
      const usuario = data.usuario;
      if (usuario) {
        generarTabla([usuario]); // Muestra solo el usuario actual en la tabla
        generarPodio([usuario]); // Genera el podio solo con el usuario actual
      } else {
        console.error('No se encontró información del usuario actual.');
      }
    } else {
      console.error('Error desde el servidor:', data.message);
    }
  })
  .catch(error => {
    console.error('Error completo al cargar los datos:', error);
  });

// Función para generar la tabla de clasificación
function generarTabla(data) {
  const tabla = document.querySelector("#tabla-clasificacion tbody");

  // Verificar si la tabla existe
  if (!tabla) {
    console.error('No se encontró la tabla de clasificación en el HTML.');
    return;
  }

  // Limpiar el contenido actual de la tabla
  tabla.innerHTML = '';

  // Iterar sobre los datos y generar filas
  data.forEach((usuario, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>
        <img 
          src="${usuario.perfil || '../../../assets/img/perfilElefante.jpg'}" 
          alt="Perfil de ${usuario.nombre}" 
          class="perfil-img"
          onerror="this.onerror=null; this.src='../../../assets/img/perfilElefante.jpg';"
        >
      </td>
      <td>${usuario.nombre}</td>
      <td>${usuario.puntaje}</td>
    `;

    tabla.appendChild(fila);
  });
}

// Función para generar el podio con un solo usuario
function generarPodio(data) {
  const podioContainer = document.querySelector(".podio");

  // Verificar si el contenedor del podio existe
  if (!podioContainer) {
    console.error('No se encontró el contenedor del podio en el HTML.');
    return;
  }

  // Limpiar el contenido actual del podio
  podioContainer.innerHTML = '';

  // Validar si hay datos
  if (!Array.isArray(data) || data.length === 0) {
    console.warn('No hay datos para mostrar en el podio.');
    return;
  }

  // Usar solo el primer usuario (el que está en la tabla)
  const usuario = data[0];

  const item = document.createElement("div");
  item.classList.add("podio-item");
  item.id = "primer-lugar";

  item.innerHTML = `
    <img 
      src="${usuario.perfil || '../../../assets/img/perfilElefante.jpg'}" 
      alt="Perfil de ${usuario.nombre}" 
      class="perfil"
      onerror="this.onerror=null; this.src='../../../assets/img/perfilElefante.jpg';"
    >
    <div class="nombre">${usuario.nombre}</div>
    <div class="puntaje">${usuario.puntaje}</div>
  `;

  podioContainer.appendChild(item);
}
