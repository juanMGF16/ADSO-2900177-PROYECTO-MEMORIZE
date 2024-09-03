<?php
include("conexion.php");
$conexion = new conexion();

$valuesPersona = array(
    ':txtnombres' => $_POST['txtnombres'],
    ':txtemail' => $_POST['txtemail']
);

$sqlInsertPersona = "
INSERT INTO public.persona (\"personaNombres\", \"personaCorreo\")
VALUES (:txtnombres, :txtemail);
";
$conexion->ejecutar($sqlInsertPersona, $valuesPersona);

$valuesLogin = array(
    ':txtusuario' => $_POST['txtusuario'],
    ':txtpassword' => $_POST['txtpassword']
);
$sqlInsertLogin = "
    INSERT INTO public.login (\"loginUsuario\", \"loginClave\")
    VALUES (:txtusuario, :txtpassword);
";
$conexion->ejecutar($sqlInsertLogin, $valuesLogin);

header('Location: http://localhost/sistemaProyecto/logiar.php');
exit(); 
?>
