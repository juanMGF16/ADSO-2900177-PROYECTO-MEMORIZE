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
    <link rel="stylesheet" href="../../assets/css/stylesMUltijugador.css">
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.min.css">
    <title>Document</title>
</head>

<body>
    <div class="containerCategoria" id="ocultar">
        <div class="capa">
            <div class="row">
                <div class="text">
                    <h3><?php echo $nombreUsuario; ?> Selecciona Alguna Opcion para Jugar </h3>
                </div>

                <div class="col-6 ">
                    <div class="casa2 numero-letras">
                        <img src="../../assets/img/logo1.jpg" alt="">
                    </div>
                </div>

                <div class="col-12">
                    <a href="crearSala.php">
                        <button type="button" class="botonMenu">
                            <div class="campo">
                                <div class="text1 ">
                                    <h3>. Crear una sala </h3>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>

                <div class="col-12">
                    <a href="ingresarSala.php">
                        <button type="button" class="botonMenu">
                            <div class="campo1">
                                <div class="text1">
                                    <h3>. Ingresar a la sala </h3>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>

                <div class="col-12">
                    <button type="button" class="botonMenu">
                    <div class="casa1 ">
                        <a href="../home.php">
                            <img src="../../assets/img/flecha-hacia-atras.jpg" alt="">
                        </a>
                    </div>
                    </button>
                </div>

            </div>


        </div>
    </div>
</body>

</html>