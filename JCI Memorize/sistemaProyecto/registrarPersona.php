
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="css/estilosLogin.css">
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="forma">
                    <div class="card-header text-center">
                        <h4>Registro</h4>
                    </div>
                    <div class="">
                        <form action="librerias/registro.php" method="POST">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input type="text" class="form-control" id="txtnombres" name="txtnombres" placeholder="Digita tu nombre" required>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="name">Edad</label>
                                <input type="number" class="form-control" id="txtEdad" name="txtEdad" placeholder="Digita su edad" required>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="txtemail" name="txtemail" placeholder="Digita tu correo Electronico" required>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="txtpassword" name="txtpassword" placeholder="Digita una contraseña" required>
                            </div>
                            <br>
                            <div class="boton">
                                <button type="submit" class="btn btn-primary">Registrarse</button>
                            </div>
                            <div class="form-group text-center texto">
                                ¿Ya tienes una cuenta? <a href="logiar.php">Inicia sesión aquí</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
