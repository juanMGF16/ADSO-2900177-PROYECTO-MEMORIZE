
<?php
session_start();

if (!isset($_SESSION['personaId'])) {
    header('Location: index.php');
    exit(); 
}

$nombreUsuario = htmlspecialchars($_SESSION['personaNombre']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylesCrearSala.css">
    <link rel="stylesheet" href="../mockup/bootstrap/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="containerCategoria" id="ocultar">
        <div class="capa">
            <div class="row">
                <div class="text">
                    <h3>Comparta Este Codigo Con Tus Amigos Para Ingresar A La Sala </h3>
                </div>
            
                <div class="col-6 ">
                <div class="casa2 ">
                            <img src="img/logo1.jpg" alt="">
                    </div>
                </div>

                <div class="col-12">
                    <div class="campo">
                        <div class="text1 ">
                            <!-- <h3> QAERJDI </h3> -->
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <button type="button" class="botonMenu">
                    <div class="campo1">
                        <div class="text2">
                            <h3>. Crear Sala </h3>
                        </div>
                    </div>
                    </button>
                </div>

                
                <div class="col-12">
                    <button type="button" class="botonMenu">
                    <div class="casa1 ">
                        <a href="multijugador.php">
                            <img src="img/flecha-hacia-atras.jpg" alt="">
                        </a>
                    </div>
                    </button>
                </div>
        </div>
    </div>
</body>
</html>