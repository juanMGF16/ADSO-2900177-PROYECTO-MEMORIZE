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
    <link rel="stylesheet" href="../../assets/css/estilosModalidad.css" />
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.css" />
    <script src="../bootstrap/js/bootstrap.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="padre">
        <div class="capa">

          <div class="col-12 total">
            <div class="row">
              <div class="col-3">
                <div class="row">
                  <div class="col-6 flecha posicion">
                    <a href="home.php">
                      <img class="imagen" src="img/flecha-hacia-atras 2.png" alt />
                    </a>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12 letra">
                    <p><?php echo $nombreUsuario; ?> escoge una opcion para jugar</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6 usuario posicion">
                    <img src="img/LogoUsuario.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
          
          <div class="col-12 total cambio">
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-12">
                    <a href="dificultad.php">
                      <button type="button" class="btn btn-primary buttonNumero ">Numeros</button>
                    </a>
                    <img class="Numeros" src="img/Numeros.png" alt="">
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12 memoryze">
                    <img src="img/NuevoLogo.png" alt="">
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12">
                    <button type="button" class="btn btn-primary buttonLetras ">Letras</button>
                    <img class="Letras" src="img/Letras.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-12 total ">
            <div class="row">
              <div class="col-10">
                <div class="row">
                  <div class="col-12 text-aling-center">
                    <button type="button" class="btn btn-primary buttonLibre ">Modalidad Libre </button>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="row">
                  <div class="col-12"></div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </body>
</html>
