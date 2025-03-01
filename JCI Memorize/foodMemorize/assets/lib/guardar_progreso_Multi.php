<?php
header('Content-Type: application/json');
include('./conexion/conexion.php');
$con = new conexion();

// Decodifica los datos recibidos en formato JSON
$data = json_decode(file_get_contents("php://input"));
$userId = $data->userId ?? null;
$level = $data->level ?? null;
$puntaje = $data->puntaje ?? null;

// Agregar más logging
error_log("Datos recibidos - userId: $userId, level: $level, puntaje: $puntaje");

if ($userId && $level && $puntaje !== null) {
    try {
        // Verifica si ya existe un puntaje para el usuario
        $consulta = "SELECT COUNT(*) FROM puntajes WHERE \"personaId\" = ?";
        $existePuntaje = $con->numeroRegistro($consulta, [$userId]);

        error_log("Número de registros existentes: $existePuntaje");

        if ($existePuntaje > 0) {
            // Si ya existe puntaje, actualiza el puntaje
            $query = "UPDATE puntajes SET puntaje = puntaje + ?, fechaRegistro = NOW() WHERE \"personaId\" = ?";
            $resultado = $con->ejecutar($query, [$puntaje, $userId]);

            error_log("Resultado de actualización: " . ($resultado ? "Éxito" : "Fallo"));

            if ($resultado) {
                echo json_encode(["success" => true, "message" => "Puntaje actualizado correctamente."]);
            } else {
                echo json_encode(["success" => false, "message" => "Error al actualizar el puntaje."]);
            }
        } else {
            // Si no existe un puntaje, inserta un nuevo registro
            $query = "INSERT INTO puntajes (\"personaId\", puntaje) VALUES (?, ?)";
            $resultado = $con->ejecutar($query, [$userId, $puntaje]);

            error_log("Resultado de inserción: " . ($resultado ? "Éxito" : "Fallo"));

            if ($resultado) {
                echo json_encode(["success" => true, "message" => "Puntaje guardado correctamente."]);
            } else {
                echo json_encode(["success" => false, "message" => "Error al guardar el puntaje."]);
            }
        }
    } catch (Exception $e) {
        error_log("Excepción capturada: " . $e->getMessage());
        echo json_encode(["success" => false, "message" => "Error en el proceso: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos insuficientes para guardar el puntaje."]);
}
?>