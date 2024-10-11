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
    <link rel="stylesheet" href="../assets/css/estilosBotones.css" />
    <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css" />
    <script src="../../bootstrap/js/bootstrap.bundle.js"></script>
    
  </head>
  <body>
  <div class="container mt-5">
        <div class="capa p-5">

            <div class="row align-items-center justify-content-between text-center mb-4 total">
                <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
                    <div class="avatar">
                        <a href="persona/perfil.html">
                        <img src="../assets/img/LogoUsuario.png" alt="Logo Usuario" class="img-fluid" />
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="letra">
                        <h1>Bienvenido<?php echo $nombreUsuario; ?> a JCI Memorize</h1 >
                    </div>
                </div>
                <div class="col-12 col-md-2 text-end cerrar">
                    <a href="cerrar.php" class="text-white d-flex flex-column align-items-center">
                        <img src="../assets/img/cerrar-sesion.png" alt="Cerrar sesión" class="img-fluid cerrar" />
                        <p>Cerrar sesión</p>
                    </a>
                </div>
            </div>


            <div class="row my-5 text-center">
                <div class="col-12">
                    <img src="../assets/img/MEMORIZE-removebg-preview.png" alt="Memorize Logo"
                        class="memoryze img-fluid" />
                </div>
            </div>


            <div class="row text-center">
                <div class="col-12 col-md-4 solitario">
                    <button onclick="window.location.href='./categorias/modalidadJ.php'">
                        <span></span><span></span><span></span>
                        <span></span> Individual
                    </button>
                    <img src="../assets/img/Categoria.jpg" class="img-fluid rounded mt-3" alt="Jugar en solitario">
                </div>
                <div class="col-12 col-md-4 conAmigos">
                    <button onclick="window.location.href='./categorias/multijugador.php'">
                        Jugar Amigos
                        <span></span><span></span><span></span><span></span>
                    </button>
                    <img src="../assets/img/ConAmigos.jpg" class="img-fluid rounded mt-3" alt="Jugar con Amigos">
                </div>
                <div class="col-12 col-md-4 conAmigos">
                    <button class="butonTutorial" onclick="window.location.href='Categorias/tutorial.php'">
                        tutorial  
                        <span></span><span></span><span></span><span></span>
                    </button>
                    <img src="../assets/img//Tutorial.png" class="img-fluid rounded mt-3" alt="Jugar con Amigos">
                </div>
            </div>
        </div>
    </div>
  </body>
</html>