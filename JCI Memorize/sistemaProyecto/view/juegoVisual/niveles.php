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
  <title>Document</title>
  <link rel="stylesheet" href="css/estilosNiveles.css" />
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
                <div class="col-12 salida posicion">
                  <img class="imagen" src="img/LogoUsuario.png" alt />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-12 letra">
                  <p>Niveles</p>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <div class="col-12 cerrar posicion">
                  <img src="img/NuevoLogo.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 total ">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 "></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 total ">
          <div class="row">
            <div class="col-4">
              <div class="row">
                <div class="col-12 mover">
                  <a href="patronJuego.php"><button type="button" class="btn btn-primary button1 ">1</button></a>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-12 ">
                  <button type="button" class="btn btn-primary button2"><img src="img/candado.png" class="candado"
                      alt=""></button>
                  <button type="button" class="btn btn-primary button3 "><img src="img/candado.png" class="candado"
                      alt=""></button>
                  <button type="button" class="btn btn-primary button4 "><img src="img/candado.png" class="candado"
                      alt=""></button>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-12 ">
                  <button type="button" class="btn btn-primary button5"><img src="img/candado.png" class="candado"
                      alt=""></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 total ">
          <div class="row">
            <div class="col-4">
              <div class="row">
                <div class="col-12 mover">
                  <img src="" alt="">
                  <button type="button" class="btn btn-primary button6 "><img src="img/candado.png" class="candado"
                      alt=""></button>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-12 ">
                  <button type="button" class="btn btn-primary button7"><img src="img/candado.png" class="candado"
                      alt=""></button>
                  <button type="button" class="btn btn-primary button8 "><img src="img/candado.png" class="candado"
                      alt=""></button>
                  <button type="button" class="btn btn-primary button9 "><img src="img/candado.png" class="candado"
                      alt=""></button>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-12 ">
                  <button type="button" class="btn btn-primary button10"><img src="img/candado.png" class="candado"
                      alt=""></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 total ">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 "></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 total ">
          <div class="row">
            <div class="col-10">
              <div class="row">
                <div class="col-12 "></div>
              </div>
            </div>
            <div class="col-2">
              <div class="row">
                <div class="col-12 ">
                  <a href="home.php">
                    <img class="imagenCasa" src="img/casa.png" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</body>

</html>