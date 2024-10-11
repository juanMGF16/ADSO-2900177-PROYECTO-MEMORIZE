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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modalidad de Juego</title>
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="../../assets/css/estilosModalidad.css" />
    <script src="../bootstrap/js/bootstrap.js"></script>
  </head>
  <body class="bg-dark text-light">
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="capa p-4  w-100">

            <!-- Header -->
            <div class="row mb-4">
              <div class="col-6 d-flex justify-content-start align-items-center">
                  <a href="../home.php">
                      <img src="../../assets/img/flecha-hacia-atras 2.png" alt="Regresar" class="img-fluid" style="width: 70px;">
                  </a>
              </div>
              <div class="col-6 d-flex justify-content-end align-items-center">
                  <a href="../persona/perfil.html">
                    <img src="../../assets/img/LogoUsuario.png" alt="Usuario" class="img-fluid" style="width: 70px;">
                  </a>
              </div>
            </div>
              
              <div class="enunciado text-center">
                <p class="nombre-usuario"><?php echo $nombreUsuario; ?>, escoge una opción para jugar</p>
              </div>
  
            <div class="row mb-4 text-center">
              <div class="col-12 col-md-4 mb-3 text-center ">
                <a href="../juegoHistoria/njuego.html">
                  <button type="button" class="btn w-100">Historias</button>
                </a>
                <img src="../../assets/img/Numeros.png" alt="Números" class="img-fluid d-block">
              </div>
              <div class="col-12 col-md-4 d-none d-md-block">
                  <img src="../../assets/img/MEMORIZE-removebg-preview.png" alt="Logo"  style="margin-top: 70px;">
              </div>
              <div class="col-12 col-md-4 mb-3 text-center">
                <a href="../JuegoVisualC/nivelesJuegoVisual/nivelUno.html">
                  <button type="button" class="btn w-100">Visual</button>
                </a>
                <img src="../../assets/img/Letras.png" alt="Letras" class="img-fluid d-block">
              </div>
            </div>

            <!-- Botón inferior -->
            <div class="row">
              <div class="col-12 text-center">
                <a href="../juegoLibre/libre.html">
                <button type="button" class="btn w-50">Modo Libre</button>
                </a>
              </div>
            </div>

        </div>
    </div>
  </body>

</html>