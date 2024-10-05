<?php
session_start();
include 'conexion.php'; // Archivo de conexión a la base de datos

$usuario_id = $_SESSION['usuario_id']; // Obtener el ID del usuario de la sesión
$data = json_decode(file_get_contents('php://input'), true);

$nivel_actual = $data['nivel_actual'];
$nivel_desbloqueado = $data['nivel_desbloqueado'];

// Actualizar el progreso del usuario
$query = "UPDATE progreso_niveles SET nivel_actual = ?, nivel_desbloqueado = ? WHERE usuario_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("iii", $nivel_actual, $nivel_desbloqueado, $usuario_id);
$stmt->execute();

$response = array('status' => 'success');
echo json_encode($response);
?>
