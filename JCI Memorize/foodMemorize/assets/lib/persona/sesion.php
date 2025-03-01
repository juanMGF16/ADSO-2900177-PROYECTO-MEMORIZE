<?php
// Desactivar errores para evitar HTML en la respuesta
ini_set('display_errors', 0); // No mostrar errores en la salida
error_reporting(0); // Desactivar notificaciones

header('Content-Type: application/json');

include('../conexion/conexion.php');

try {
    session_start();

    // Verificar si hay una sesión activa
    if (!isset($_SESSION['personaId'])) {
        echo json_encode([
            'success' => false, 
            'message' => 'No hay sesión iniciada'
        ]);
        exit;
    }

    // Crear instancia de conexión
    $con = new conexion();

    // Obtener ID de persona de la sesión
    $personaId = $_SESSION['personaId'];

    // Consulta para obtener el usuario actual
    $queryUsuarioActual = "
        SELECT 
            p.\"personaId\", 
            p.\"nombrePersona\" AS nombre, 
            COALESCE(punt.puntaje, 0) AS puntaje
        FROM 
            persona p
        LEFT JOIN 
            puntajes punt ON p.\"personaId\" = punt.\"personaId\"
        WHERE 
            p.\"personaId\" = :personaId
    ";

    $usuarioActual = $con->consultaValor($queryUsuarioActual, [':personaId' => $personaId]);

    if (empty($usuarioActual)) {
        echo json_encode([
            'success' => true,
            'personaId' => $personaId,
            'usuario' => null,
            'message' => 'No se encontró información para el usuario actual',
            'additionalInfo' => 'Este es un campo adicional que no afecta a otras partes' // Campo adicional opcional
        ]);
        exit;
    }

    // Aquí debes asegurarte de que el nombre de la persona sea parte de la respuesta
    echo json_encode([
        'success' => true,
        'personaId' => $personaId,
        'personaNombre' => $usuarioActual[0]['nombre'], // Asegurarte de incluir 'personaNombre'
        'usuario' => $usuarioActual[0], // El resto de los datos del usuario
        'additionalInfo' => 'Información extra para casos especiales' // Campo adicional
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false, 
        'message' => 'Error: ' . $e->getMessage()
    ]);
    exit;
}
?>
