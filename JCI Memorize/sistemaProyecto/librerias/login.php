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
        $usuario = $_POST['txtUsername'];
        $clave = $_POST['txtContra'];

        $datosAcceso->setUsuario($usuario);
        $datosAcceso->setClave($clave);

        $values = array(
            ':loginsystemUsuario'=>$datosAcceso->getUsuario(),
            ':loginsystemClave'=>$datosAcceso->getClave()
        );
      $sqlLogin="SELECT 
        \"login_ID\",
        \"login\".\"personaId\",
        \"loginUsuario\",
        \"loginClave\",
        \"persona\".\"personaNombres\",
        \"persona\".\"personaCorreo\"
     FROM \"login\"
      INNER JOIN \"persona\" ON \"login\".\"personaId\" = \"persona\".\"personaId\"
      WHERE \"loginUsuario\" = :loginsystemUsuario
        AND \"loginClave\" = :loginsystemClave;
";

    
        $numeroFilas=$conexion->numeroRegistro($sqlLogin,$values);
      if($numeroFilas){
        $resultadoLogin=$conexion->consultaValor($sqlLogin,$values);

        foreach($resultadoLogin as $datosLogin){
            $_SESSION['personaId']=$datosLogin['personaId'];
            $_SESSION['personaNombres']=$datosLogin['personaNombres'];    
            $_SESSION['personaCorreo']=$datosLogin['personaCorreo'];
        }
        header('Location:../home.php');
      }
      else{
        header('Location:../logiar.php');
      }

    }
   
 
?>