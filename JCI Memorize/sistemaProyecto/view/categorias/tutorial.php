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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/stylesTutorial.css">
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.min.css">
    <script src="../../assets/js/main.js"></script>
    <title>Tutorial</title>
</head>

<body>

    <div class="container">
        <div class="row">

            <div class="col-6">
                <div class="casa2">
                    <button type="button" class="botonMenu">
                        <img src="../../assets/img/logo1.jpg" alt="">

                    </button>

                </div>
            </div>

            <div class="col-6 d-flex justify-content-end">
                <div class="casa">
                   <a href="../home.php">
                        <button type="button" class="botonMenu">
                            <img src="../../assets/img/casa.png" alt="">
                        </button>
                   </a>
                </div>
            </div>
        </div>
    </div>

    <nav>
        <!-- <div class="">
            <button class="btn" type="submit" >Letra O</button>
        </div> -->
        <a href="#" id="btn1">Categoria
            <img src="../../assets/img/niña.jpg" alt="" width="35" height="29" class="d-inline-block align-text-top">

        </a>
        <a href="#" id="btn2">Niveles
            <img src="../../assets/img/niño.jpg" alt="" width="35" height="29" class="d-inline-block align-text-top">

        </a>
        <a href="#" id="btn3">Perfil
            <img src="../../assets/img/niñojuega.jpg" alt="" width="35" height="30" class="d-inline-block align-text-top">
        </a>
        <a href="#" id="btn4">Modo de juego
            <img src="../../assets/img/niños (1).jpg" alt="" width="35" height="29" class="d-inline-block align-text-top">
        </a>
        <div class="animation start-home">

        </div>
    </nav>

    <div class="containerCategoria" id="ocultar">
        <div class="capa">
            <div class="row">

                <div class="col-6 d-flex justify-content-center">
                    <div class="campo">
                        <div class="text">
                            <h3>.NUMEROS</h3>
                        </div>
                        <div class="col-6 numero-letras"></div>
                        <div class=" numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/numero.jpg" alt="">
                        </div>
                    </div>
                </div>



                <div class="col-6 d-flex justify-content-center">
                    <div class="campo">
                        <div class="text">
                            <h3>.LETRAS </h3>

                        </div>
                        <div class="col-6">

                        </div>
                        <div class="numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/letras.jpg" alt="">
                        </div>


                    </div>

                </div>
                <div class="col-12">
                    <div class="texts fw-bolder">
                        <p>al seleccionar algunas de las categorias que te parezcan mas interesante comenzara el juego,
                            En el juego aparecera unos cuadro donde contiene numero o letras despues de 3 minutos
                            desaparecera, y tu como jugador deberas recordar los numeros que viste, te damos un
                            determinado tiempo pero si logras enviar la respuesta casi en la mitad del tiempo tienes
                            otras oportunidad de recordar y enviar otras respuesta </p>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div class="containerNiveles" id="ocultar1">
        <div class="capa">
            <div class="row">

                <div class="col-4 d-flex justify-content-center">
                    <div class="campo">
                        <div class="text">
                            <h3>.Facil</h3>
                        </div>
                        <div class="col-4"></div>

                        <div class=" numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/niña.jpg" alt="">
                        </div>
                    </div>
                </div>



                <div class="col-4 d-flex justify-content-center">
                    <div class="campo">
                        <div class="text">
                            <h3>.Dificil </h3>

                        </div>
                        <div class="col-4">

                        </div>
                        <div class="numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/niños (1).jpg" alt="">
                        </div>


                    </div>
                </div>

                <div class="col-4 d-flex justify-content-center">
                    <div class="campo">
                        <div class="text">
                            <h3>.Intermedio </h3>

                        </div>
                        <div class="col-4">

                        </div>
                        <div class="numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/niñojuega.jpg" alt="">
                        </div>


                    </div>
                </div>
                <div class="col-12">
                    <div class="texts fw-bolder">
                        <p>Al seleccionar los niveles es para que te exija
                            mas en fortalecer esa memoria, cada nivel sera mas complejo </p>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div class="containerPerfil" id="ocultar2">
        <div class="capa">
            <div class="row">

                <div class="col-4"></div>

                <div class="col-4 d-flex justify-content-center">
                    <div class="campo">
                        <div class="text">
                            <h3>.Perfil </h3>

                        </div>
                        <div class="col-4">

                        </div>
                        <div class="numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/perfil.png" alt="">
                        </div>


                    </div>
                </div>

                <div class="col-12">
                    <div class="texts fw-bolder">
                        <p>Al seleccionar los niveles es para que te exija
                            mas en fortalecer esa memoria, cada nivel sera mas complejo </p>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div class="containerModoDeJuego" id="ocultar3">
        <div class="capa">
            <div class="row">

                <div class="col-6 d-flex justify-content-center">
                    <div class="campo1">
                        <div class="text">
                            <h3>.Crear una sala </h3>
                        </div>
                        <div class="col-6 numero-letras"></div>
                        <div class=" numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/niño.jpg" alt="">
                        </div>
                    </div>
                </div>



                <div class="col-6 d-flex justify-content-center">
                    <div class="campo1">
                        <div class="text">
                            <h3>.Ingresar a la sala </h3>

                        </div>
                        <div class="col-6">

                        </div>
                        <div class="numero-letras d-flex justify-content-center">
                            <img src="../../assets/img/niña.jpg" alt="">
                        </div>


                    </div>

                </div>
                <div class="col-12">
                    <div class="texts fw-bolder">
                        <p>Al seleccionar jugar con amigos te va aparacer que tu puedes crear la sala
                            o ingresar a la sala, al crear tu eres el administrador donde aparecera
                            un codigo para que lo compartas con tus amigos, siendo administrador elijes
                            las categorias y los niveles .al ingresar a la sala tu
                            digitas el codigo que te envio tus amigos para comenzar a jugar</p>
                    </div>
                </div>

            </div>

        </div>
    </div>

</body>

</html>