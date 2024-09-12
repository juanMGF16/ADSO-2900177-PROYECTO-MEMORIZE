<?php
session_start();

if (!isset($_SESSION['personaId'])) {
    header('Location: index.php');
    exit(); 
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="css/loading.css">
    <script src="../bootstrap/js/bootstrap.min.js"></script>
    <title>Cargando</title>
</head>
<body>
    <div class="center col">
        <div class="m-auto">
            <img src="img/logo1.jpg" class="logo" alt="Logo"> 
        </div>
        <div class="m-auto" id="containere">
            <div id="loading-bar"></div>
            <h1 class="letra1">CARGANDO ..</h1>
        </div>
    </div>
    <script src="js/loadop.js"></script>
</body>
</html>
