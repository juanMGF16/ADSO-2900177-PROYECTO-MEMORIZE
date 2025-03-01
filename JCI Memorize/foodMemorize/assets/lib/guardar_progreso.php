<?php
header('Content-Type: application/json'); // Asegúrate de que la respuesta sea JSON
include('./conexion/conexion.php');
$con = new conexion();

$data = json_decode(file_get_contents("php://input"));
$userId = $data->userId ?? null; // Usar null si no existe
$level = $data->level ?? null; // Usar null si no existe

if ($userId && $level) {
    $consulta = "SELECT COUNT(*) FROM progreso_usuario WHERE persona_id = ?";
    $existeProgreso = $con->numeroRegistro($consulta, [$userId]);

    if ($existeProgreso > 0) {
        $query = "UPDATE progreso_usuario SET nivel = ?, nivel_desbloqueado = GREATEST(nivel_desbloqueado, ?), fecha_ultima_actualizacion = NOW() WHERE persona_id = ?";
        $con->ejecutar($query, [$level, $level, $userId]);
    } else {
        $query = "INSERT INTO progreso_usuario (persona_id, nivel, nivel_desbloqueado) VALUES (?, ?, ?)";
        $con->ejecutar($query, [$userId, $level, $level]);
    }

    echo json_encode(["success" => true, "message" => "Progreso guardado correctamente."]);
} else {
    echo json_encode(["success" => false, "message" => "Datos insuficientes para guardar progreso."]);
}
?>
