<?php
session_start();
session_destroy();

header('Location: http://localhost/sistemaProyecto/view/logiar.php');
exit();
?>
