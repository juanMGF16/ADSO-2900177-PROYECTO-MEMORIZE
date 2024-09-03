<?php
session_start();

if (!isset($_SESSION['personaId'])) {
    header('Location: index.php');
    exit(); 
}

$nombreUsuario = htmlspecialchars($_SESSION['personaNombres']);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu</title>
    <link rel="stylesheet" href="css/estilosHome.css" />
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
    <script src="../bootstrap/js/bootstrap.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="capa">

        <div class="col-12 total">
          <div class="row">
            <div class="col-3">
              <div class="row">
                <div class="col-6 salida posicion">
                  <img class="imagen" src="img/LogoUsuario.png" alt />
                </div>
                <div class="col-6"></div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-12 letra">
                  <p>Bienvenido <?php echo $nombreUsuario; ?> a JCI Memorize</p>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <div class="col-6"></div>
                <div class="col-6 cerrar posicion">
                  <a href="cerrar.php"><img src="img/cerrar-sesion.png" alt /></a>
                  <p>Cerrar sesion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-12 total cambio">
            <div class="row">
              <div class="col-3">
                <div class="row">
                  <div class="col-6 "></div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                    <div class="col-12 memoryze">
                        <img src="img/NuevoLogo.png" alt="">
                    </div>
                </div>
              </div>
              <div class="col-3">
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6 "></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 total ">
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-12 ">
                    <a href="modalidadJ.php">
                      <button type="button" class="btn btn-primary buttonSolitario ">Jugar en solitario</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                    <div class="col-12 ">
                        <button type="button" class="btn btn-primary buttonAmigos ">Jugar con Amigos</button>
                    </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12">
                    <button type="button" class="btn btn-primary buttonTutorial ">Tutorial</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 total ">
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-12 solitario">
                    <img src="img/Categoria.jpg" alt="">
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                    <div class="col-12 amigos">
                        <img src="img/ConAmigos.jpg" alt="">
                    </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12 tutorial">
                    <img src="img/Tutorial.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>


      </div>
    </div>
  </body>
</html>
