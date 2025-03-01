<?php
include('../conexion/conexion.php');
include('datosLogin.php');

class IniciarSesion extends DatosPersona {

    private $sqlLogin;

    public function login() {
        $conexion = new Conexion();

        $this->sqlLogin = "SELECT 
        \"personaId\", 
        \"nombrePersona\", 
        \"edadPersona\", 
        \"personaCorreo\", 
        \"personaPassword\"
	    FROM public.persona
            WHERE \"personaCorreo\" = :email
            AND \"personaPassword\" = :password;
        ";

        // Valores para la consulta
        $valoresLogin = [
            ':email' => $this->getEmailPersona(),
            ':password' => $this->getPassword()
        ];

        // Verificar si el correo existe
        $numeroFilas = $conexion->numeroRegistro($this->sqlLogin,$valoresLogin);
        if($numeroFilas){
            $resultadoLogin=$conexion->consultaValor($this->sqlLogin,$valoresLogin);
            foreach($resultadoLogin as $datosLogin){
                $_SESSION['personaId']=$datosLogin['personaId'];
                $_SESSION['nombrePersona']=$datosLogin['nombrePersona'];    
                $_SESSION['edadPersona']=$datosLogin['edadPersona'];
        }
            return true; // Inicio de sesión exitoso
        } else {
            return false; // Credenciales incorrectas
        }
    }
}
?>
