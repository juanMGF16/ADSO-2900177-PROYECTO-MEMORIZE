<?php
session_start();

if (!isset($_SESSION['personaId'])) {
    header('Location: ../index.php');
    exit(); 
}

$nombreUsuario = htmlspecialchars($_SESSION['personaNombre']);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu</title>
    <link rel="stylesheet" href="../assets/css/estilosHome.css" />
    <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <div class="container mt-5">
      <div class="capa p-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-2 text-center">
            <img class="img-fluid avatar" src="../assets/img/LogoUsuario.png" alt="Logo Usuario" />
          </div>
          <div class="col-8 text-center">
            <h1 class="letra">Bienvenido <?php echo $nombreUsuario; ?> a JCI Memorize</h1>
          </div>
          <div class="col-2 text-end">
            <a href="cerrar.php" class="text-white">
              <img src="../assets/img/cerrar-sesion.png" alt="Cerrar sesión" class="img-fluid cerrar" />
              <p>Cerrar sesión</p>
            </a>
          </div>
        </div>

        <div class="row my-5 text-center">
          <div class="col-12">
            <img src="../assets/img/MEMORIZE-removebg-preview.png" alt="Memorize Logo" class="memoryze" />
          </div>
        </div>

        <div class="row text-center">
          <div class="col-4">
            <a href="modalidadJ.php" class="btn btn-primary btn-lg buttonSolitario">Jugar en solitario</a>
            <img src="../assets/img/Categoria.jpg" class="img-fluid rounded mt-3" alt="Jugar en solitario">
          </div>
          <div class="col-4">
            <a href="multijugador.php" class="btn btn-primary btn-lg buttonAmigos">Jugar con Amigos</a>
            <img src="../assets/img/ConAmigos.jpg" class="img-fluid rounded mt-3" alt="Jugar con Amigos">
          </div>
          <div class="col-4">
            <a href="tutorial.php" class="btn btn-primary btn-lg buttonTutorial">Tutorial</a>
            <img src="../assets/img/Tutorial.png" class="img-fluid rounded mt-3" alt="Tutorial">
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
