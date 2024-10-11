function registrarPersona() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('txtnombres').value;
    const edad = document.getElementById('txtEdad').value;
    const email = document.getElementById('txtemail').value;
    const password = document.getElementById('txtpassword').value;

    // Crear el objeto con los datos del formulario
    const datos = {
        txtnombres: nombre,
        txtEdad: edad,
        txtemail: email,
        txtpassword: password
    };

    // Enviar los datos a registro.php usando fetch
    fetch('../assets/librerias/registro.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos),  // Convertir el objeto a JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            document.getElementById('responseMessage').innerText = "Registro exitoso!";
        } else {
            document.getElementById('responseMessage').innerText = data.error || "Error al registrar.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = "Error en la solicitud: " + error.message;
    });
}
