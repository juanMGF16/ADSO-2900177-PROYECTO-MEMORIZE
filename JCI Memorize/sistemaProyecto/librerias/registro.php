<?php
include("conexion.php");
$conexion = new conexion();

$valuesPersona = array(
    ':txtnombres' => $_POST['txtnombres'],
    ':txtEdad' => $_POST['txtEdad']
);

$sqlInsertPersona = "
INSERT INTO public.persona (\"personaNombre\", \"personaEdad\")
VALUES (:txtnombres, :txtEdad);
";
$conexion->ejecutar($sqlInsertPersona, $valuesPersona);

$valuesLogin = array(
    ':txtemail' => $_POST['txtemail'],
    ':txtpassword' => $_POST['txtpassword']
);
$sqlInsertLogin = "
    INSERT INTO public.login (\"loginCorreo\", \"loginPasswork\")
    VALUES (:txtemail, :txtpassword);
";
$conexion->ejecutar($sqlInsertLogin, $valuesLogin);

header('Location: http://localhost/sistemaProyecto/logiar.php');
exit(); 
?>
