// Función para seleccionar un avatar predeterminado
function seleccionarAvatar(ruta) {
    document.getElementById("avatar-seleccionado").src = ruta;
    // Cerrar el modal
    var avatarModal = bootstrap.Modal.getInstance(document.getElementById('avatarModal'));
    avatarModal.hide();
  }
  
  // Función para subir un avatar personalizado
  function subirAvatar(event) {
    const reader = new FileReader();
    reader.onload = function() {
      const avatarSeleccionado = document.getElementById("avatar-seleccionado");
      avatarSeleccionado.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  