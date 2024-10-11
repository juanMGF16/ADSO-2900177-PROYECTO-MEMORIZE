<?php
session_start();
include('conexion.php');

$conexion = new conexion();

// Verificar si se recibieron los datos necesarios
if (isset($_POST['maxLevelReached']) && isset($_POST['score'])) {
    $maxLevelReached = $_POST['maxLevelReached'];
    $score = $_POST['score'];
    $personaId = $_SESSION['personaId']; // Suponiendo que el ID de la persona está almacenado en la sesión

    // Consulta SQL para actualizar el progreso del jugador
    $sqlUpdate = "UPDATE persona SET max_level = :maxLevelReached, score = :score WHERE personaId = :personaId";
    
    // Valores a pasar a la consulta
    $values = array(
        ':maxLevelReached' => $maxLevelReached,
        ':score' => $score,
        ':personaId' => $personaId
    );

    try {
        // Ejecutar la consulta
        $conexion->ejecutar($sqlUpdate, $values);
        echo json_encode(array("success" => true, "message" => "Progreso guardado correctamente."));
    } catch (Exception $e) {
        echo json_encode(array("success" => false, "message" => "Error al guardar el progreso: " . $e->getMessage()));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Datos incompletos."));
}
?>
