<?php
include('../assets/librerias/registro.php');

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (isset($data['txtnombres']) && isset($data['txtEdad']) && isset($data['txtemail']) && isset($data['txtpassword'])) {
    $nombres = $data['txtnombres'];
    $edad = intval($data['txtEdad']);
    $email = $data['txtemail'];
    $password = password_hash($data['txtpassword'], PASSWORD_DEFAULT); // Encriptar contraseña


    header('Content-Type: application/json');
    echo json_encode($responde);
} else {
    // Enviar error si faltan datos
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Faltan datos']);
}
?>
