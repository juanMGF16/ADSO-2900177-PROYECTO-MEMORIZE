<?php
header('Content-Type: application/json');
include('./conexion/conexion.php');
$con = new conexion();

$data = json_decode(file_get_contents("php://input"));
$userId = $data->userId ?? null;
$level = $data->level ?? null;

if ($userId && $level) {
   
    $consulta = "SELECT COUNT(*) FROM progreso_usuario_visual WHERE persona_id = ?";
    $existeProgreso = $con->numeroRegistro($consulta, [$userId]);

    if ($existeProgreso > 0) {
    
        $query = "UPDATE progreso_usuario_visual 
                  SET nivel = ?, nivel_desbloqueado = GREATEST(nivel_desbloqueado, ?), 
                      fecha_ultima_actualizacion = NOW() 
                  WHERE persona_id = ?";
        $resultado = $con->ejecutar($query, [$level, $level, $userId]);
    } else {
        // Insertar nuevo progreso si no existe
        $query = "INSERT INTO progreso_usuario_visual (persona_id, nivel, nivel_desbloqueado) 
                  VALUES (?, ?, ?)";
        $resultado = $con->ejecutar($query, [$userId, $level, $level]);
    }

    echo json_encode(["success" => true, "message" => "Progreso guardado correctamente."]);
} else {
    echo json_encode(["success" => false, "message" => "Datos insuficientes para guardar progreso."]);
}
?>
