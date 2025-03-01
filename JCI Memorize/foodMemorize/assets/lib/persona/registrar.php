<?php 
    include('../conexion/conexion.php');
    include('persona.php');

    class Registrar extends Persona{
        
        private $sqlPersona;
        public function registro(){
            $conexion = new Conexion();
            $this->sqlPersona="INSERT INTO public.persona(\"nombrePersona\", \"edadPersona\", \"personaCorreo\", \"personaPassword\")
	                            VALUES (:nombre, :edad, :email, :password);";
            $valoresPersona=[
                ':nombre' => $this->getNombrePersona(),
                ':edad' => $this->getEdadPersona(),
                ':email' => $this->getEmailPersona(),
                ':password' => $this->getPassword()
            ];

            $conexion->ejecutar($this->sqlPersona, $valoresPersona); 
        }
        
    }
?>