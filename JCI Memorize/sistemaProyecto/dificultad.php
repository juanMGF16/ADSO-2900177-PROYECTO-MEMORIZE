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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/estilosDificultad.css" />
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
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
                  <div class="col-6 "></div>
                  <div class="col-6"></div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12 letra">
                    <p>Seleciona la dificultad  de tu preferencia </p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6  "></div>
                </div>
              </div>
            </div>
          </div>
          <br>
          
          <div class="col-12 total cambio">
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-12"></div>
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
                  <div class="col-12"></div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-12 total ">
            <div class="row">
              <div class="col-10">
                <div class="row">
                  <div class="col-12 ">
                    <button type="button" class="btn btn-primary buttonLibre ">Facil </button>
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
  
          <div class="col-12 total ">
            <div class="row">
              <div class="col-10">
                <div class="row">
                  <div class="col-12 ">
                      <a href="niveles.php">
                        <button type="button" class="btn btn-primary buttonLibre ">Intermedio </button>
                      </a>
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
  
          <div class="col-12 total ">
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-4 avatar posicion">
                    <a href="modalidadJ.php">
                      <img src="img/flecha-hacia-atras 2.png" alt="">
                    </a>
                  </div>
                  <div class="col-4 "></div>
                  <div class="col-4 "></div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-12 ">
                    <button type="button" class="btn btn-primary buttonDificil">Dificil</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-4  "></div>
                  <div class="col-4  "></div>
                  <div class="col-4 avatar posicion">
                    <img src="img/LogoUsuario.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
       </div>

    </div>
  </body>
</html>