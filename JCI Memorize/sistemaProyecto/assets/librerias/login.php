<?php
session_start();
    include('conexion.php');
    include('classLogin.php');
    $datosAcceso = new accesos();
    $conexion = new conexion();


    if(isset($_POST['txtUsername'])==false && isset($_POST['txtContra'])==false){
        header('Location:../index.php');
    }
    else{
        $usuario = $_POST['txtemail'];
        $clave = $_POST['txtContra'];

        $datosAcceso->setUsuario($usuario);
        $datosAcceso->setClave($clave);

        $values = array(
            ':loginsystemUsuario'=>$datosAcceso->getUsuario(),
            ':loginsystemClave'=>$datosAcceso->getClave()
        );
      $sqlLogin="SELECT 
        \"loginId\",
        \"login\".\"personaId\",
        \"loginCorreo\",
        \"loginPasswork\",
        \"persona\".\"personaNombre\",
        \"persona\".\"personaEdad\"
     FROM \"login\"
      INNER JOIN \"persona\" ON \"login\".\"personaId\" = \"persona\".\"personaId\"
      WHERE \"loginCorreo\" = :loginsystemUsuario
        AND \"loginPasswork\" = :loginsystemClave;
";

    
        $numeroFilas=$conexion->numeroRegistro($sqlLogin,$values);
      if($numeroFilas){
        $resultadoLogin=$conexion->consultaValor($sqlLogin,$values);

        foreach($resultadoLogin as $datosLogin){
            $_SESSION['personaId']=$datosLogin['personaId'];
            $_SESSION['personaNombre']=$datosLogin['personaNombre'];    
            $_SESSION['personaEdad']=$datosLogin['personaEdad'];
        }
        header('Location:../../view/home.php');
      }
      else{
        header('Location:../../view/logiar.php');
      }

    }
   
 
?>