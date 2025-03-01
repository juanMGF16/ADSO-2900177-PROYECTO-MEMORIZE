<?php
header('Content-Type: application/json');

    include('registrar.php');
    // Verifica que la solicitud sea POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Obtener el cuerpo de la solicitud JSON
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        // Verifica si todos los campos están presentes
        if (isset($data['txtnombres'], $data['txtEdad'], $data['txtemail'], $data['txtpassword'])) {
            
            try {
                $persona = new Registrar();
        
                $nombre = $data['txtnombres'];
                $edad = $data['txtEdad'];
                $email = $data['txtemail'];
                $password = $data['txtpassword'];
                
                $persona->setNombrePersona($nombre);
                $persona->setEdadPersona($edad);
                $persona->setEmailPersona($email);
                $persona->setPassword($password);
            
                
                $persona->registro();
                echo json_encode(array('success' => true));

            } catch (Exception $e) {
                //
                echo json_encode(array('success' => false, 'message' => 'Error al registrar: ' . $e->getMessage()));
            }
        } else {
            // Respuesta si faltan campos
            echo json_encode(array('success' => false, 'message' => 'Faltan campos obligatorios.'));
        }
    } else {
        // Respuesta para métodos no permitidos
        echo json_encode(array('success' => false, 'message' => 'Método no permitido.'));
}
?>
