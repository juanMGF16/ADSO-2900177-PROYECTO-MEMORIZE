<?php
// Conexión a la base de datos
$host = 'localhost'; // O la IP de tu servidor
$dbname = 'tu_base_de_datos';
$username = 'tu_usuario';
$password = 'tu_contraseña';

try {
    // Crear una nueva conexión PDO
    $conn = new PDO("pgsql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Preparamos la consulta
    $sql = 'SELECT p."personaNombres", p."personaEdad", a."avatarImg"
            FROM public.persona p
            JOIN public.avatar a ON p."personaId" = a."personaId"
            WHERE p."personaId" = :personaId';

    // Preparamos el statement
    $stmt = $conn->prepare($sql);

    // Bind del parámetro personaId
    $personaId = 1; // Este sería el ID de la persona que quieres buscar
    $stmt->bindParam(':personaId', $personaId, PDO::PARAM_INT);

    // Ejecutamos la consulta
    $stmt->execute();

    // Obtenemos el resultado
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Mostramos los datos
    if ($row) {
        echo "Nombre: " . htmlspecialchars($row['personaNombres']) . "<br>";
        echo "Edad: " . htmlspecialchars($row['personaEdad']) . "<br>";
        
        // Mostrar la imagen de avatar si está almacenada como una URL o ruta de archivo
        echo '<img src="data:image/jpeg;base64,'.base64_encode($row['avatarImg']).'" alt="Avatar" />';
    } else {
        echo "No se encontró el usuario.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
