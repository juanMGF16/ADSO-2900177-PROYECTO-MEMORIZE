<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio Sessión</title>
    <link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="../assets/css/estilosLogin.css">
    <!-- <img src="img/Logo.jpeg" alt=""> -->
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="capa">
                    <div class="card-header text-center">
                        <h4>Iniciar Sesión</h4>
                    </div>
                    <div class="">
                        <form action="../assets/librerias/login.php" method="POST">
                            <div class="form-group">
                                <label for="username" class="encabeza">Correo de usuario</label>
                                <input type="email" class="form-control" id="txtemail" name="txtemail" required>
                            </div>
                            <div class="form-group">
                                <label for="password" class="encabeza">Contraseña</label>
                                <input type="password" class="form-control" id="txtContra" name="txtContra" required>
                            </div>
                            <br>
                            <div class="form-group boton">
                                <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
                            </div>
                            <div class="form-group text-center texto">
                                ¿No tienes una cuenta? <a href="registrarPersona.php">Regístrate aquí</a>
                            </div>
                            <div class="form-group text-center texto">
                                <a href="olvideContra.php">¿Olvidaste tu contraseña?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>