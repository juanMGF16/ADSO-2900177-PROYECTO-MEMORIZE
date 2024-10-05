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
  <title>Juego</title>
  <link rel="stylesheet" href="css/estilos2.css"/>
  <link rel="stylesheet" href="../bootstrap/css/bootstrap.css"/>

</head>

<body>
  <div class="container">
    <div class="padre">
      <div class="capa">
        
        <div class="col-12 total">
          <div class="row">
            <div class="col-3">
              <div class="row">
                <div class="col-12 avatar posicion">
                  <img class="imagen" src="img/LogoUsuario.png" alt="Logo Usuario" />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-12 letra">
                  <p>Ordena Los Numeros</p>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <div class="col-12 logo posicion">
                  <img src="img/NuevoLogo.png" alt="Nuevo Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="" method="post">
          <div id="botones"></div>
          <!-- Botón para verificar el orden -->
          <button id="checkOrderButton" class="btn btn-success mt-3 boton">Examinar</button>
        </form>
      </div>
    </div>
  </div>

  <script src="../bootstrap/js/bootstrap.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
  <script src="js/botones2.js"></script>
</body>

</html>
