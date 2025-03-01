<?php
session_start();
include('../conexion/conexion.php');

header('Content-Type: application/json');

if (!isset($_SESSION['personaId'])) {
    echo json_encode(['success' => false, 'message' => 'Usuario no autenticado']);
    exit;
}

$personaId = $_SESSION['personaId'];

try {
    $con = new conexion();
    // Asegúrate de que el nombre de la tabla sea correcto
    $query = "SELECT nivel_desbloqueado FROM progreso_usuario_visual WHERE persona_id = ? ORDER BY nivel_desbloqueado DESC LIMIT 1";
    $result = $con->consultaValor($query, [$personaId]);

    if (!empty($result)) {
        $nivelDesbloqueado = $result[0]['nivel_desbloqueado'];
        echo json_encode(['success' => true, 'nivel' => $nivelDesbloqueado]);
    } else {
        echo json_encode(['success' => true, 'nivel' => 1]); // Si no hay progreso, empieza desde el nivel 1
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al cargar el progreso: ' . $e->getMessage()]);
}
?>
