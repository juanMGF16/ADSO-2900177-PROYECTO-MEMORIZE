function registrarUsuario() {
  const nombre = document.getElementById('txtnombres').value;
  const edad = document.getElementById('txtEdad').value;
  const email = document.getElementById('txtemail').value;
  const password = document.getElementById('txtpassword').value;

 
  if (!nombre || !edad || !email || !password) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos.',
      customClass: {
        popup: 'alerta',  
        confirmButton: 'custom-button'
      }
    });
    return;
  }

  if (!/^[a-zA-Z\s]*$/.test(nombre)) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: 'El nombre solo debe contener letras ',
    });
    return;  // Detener la ejecución si el nombre es inválido
  }

  
  if (edad < 12) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: 'La persona debe tener mas de 12 años',
    });
    return;  // Detener la ejecución si la edad no es válida
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    Swal.fire({
      icon: 'warning',
      title: 'Correo inválido',
      text: 'Por favor, el correo electrónico necesita contener @',
      customClass: {
        popup: 'alerta',
        confirmButton: 'custom-button'
      }
    });
    return;
  }


  const datosUsuario = {
    txtnombres: nombre,
    txtEdad: edad,
    txtemail: email,
    txtpassword: password
  };

  // Enviar los datos con fetch
  fetch('../assets/lib/persona/registrarPersona.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosUsuario)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'alerta',  // Clase para el contenedor de la alerta
        }
      }).then(() => {
        window.location.href = 'login.html';  // Redirigir al login
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: data.message
      });
    }
  })
  .catch(error => {
    console.error('Error al registrar el usuario:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error en la conexión',
      text: 'No se pudo completar el registro.'
    });
  });
}


async function iniciarSesion() {
  const email = document.getElementById('txtemail').value;
  const password = document.getElementById('txtContra').value;

  // Validación de campos vacíos
  if (!email || !password) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor, ingresa tu email y contraseña.'
    });
    return; 
  }

  try {
    const response = await fetch('../assets/lib/persona/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        txtemail: email,
        txtContra: password
      })
    });
    
    const data = await response.json();

    if (data.success) {
      window.location.href = "animalito/index.html";
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'Por favor, verifica tu email y contraseña.'
      });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error en la conexión',
      text: 'No se pudo completar el inicio de sesión. Intenta de nuevo más tarde.'
    });
  }
}


async function obtenerDatosUsuario() {
  try {
    const response = await fetch('../assets/lib/persona/sesion.php');  
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

