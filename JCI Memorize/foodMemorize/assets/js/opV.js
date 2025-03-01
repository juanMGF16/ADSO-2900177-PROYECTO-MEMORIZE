
async function obtenerDatosUsuario() {
  try {
    const response = await fetch('../../assets/lib/persona/sesion.php');  
      const data = await response.json();

      if (data.success) {
          const nombreUsuarioElement = document.getElementById('nombreUsuario');
          if (nombreUsuarioElement) {
              nombreUsuarioElement.textContent = data.personaNombre;
          }
      } else {
          window.location.href = 'login.html';
      }
  } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
  }
}

if (document.getElementById('nombreUsuario')) {
  obtenerDatosUsuario();  // Solo ejecuta si existe el elemento
}

