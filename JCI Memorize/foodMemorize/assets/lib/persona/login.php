<?php
include('loginPersona.php'); 
session_start();

header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido.'
    ]);
    exit;
}

// Obtener los datos JSON del cuerpo de la petición
$json = file_get_contents('php://input');
$datos = json_decode($json, true);

if (!isset($datos['txtemail']) || !isset($datos['txtContra'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Datos incompletos.'
    ]);
    exit;
}

    $persona = new IniciarSesion();
    
    $email = $datos['txtemail'];
    $password = $datos['txtContra'];
                
    $persona->setEmailPersona($email);
    $persona->setPassword($password);

    $persona->login();
    echo json_encode([
        'success' => true,
        'message' => 'Inicio de sesión exitoso.'
    ]);


exit;
?>
