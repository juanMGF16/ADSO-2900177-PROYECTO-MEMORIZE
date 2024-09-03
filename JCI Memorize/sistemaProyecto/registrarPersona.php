
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="css/estilosLogin.css">
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mt-5 fondo">
                    <div class="card-header text-center">
                        <h4>Registro</h4>
                    </div>
                    <div class="card-body ">
                        <form action="librerias/registro.php" method="POST">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input type="text" class="form-control" id="txtnombres" name="txtnombres" placeholder="Digita tu nombre" required>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="txtemail" name="txtemail" placeholder="Digita tu correo Electronico" required>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="name">Usuario</label>
                                <input type="text" class="form-control" id="txtusuario" name="txtusuario" placeholder="Digita un nombre de usuario" required>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="txtpassword" name="txtpassword" placeholder="Digita una contraseña" required>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
