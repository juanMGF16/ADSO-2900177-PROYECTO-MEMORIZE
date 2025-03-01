<?php 
class Persona{
    private $nombrePersona;
    private $edadPersona;
    private $emailPersona;
    private $password;

    public function setNombrePersona($nombrePersona){
        $this->nombrePersona=$nombrePersona;
    }
    public function getNombrePersona(){
        return $this->nombrePersona;
    }
    public function setEdadPersona($edadPersona){
        $this->edadPersona=$edadPersona;
    }
    public function getEdadPersona(){
        return $this->edadPersona;
    }
    public function setEmailPersona($emailPersona){
        $this->emailPersona=$emailPersona;
    }
    public function getEmailPersona(){
        return $this->emailPersona;
    }
    public function setPassword($password){
        $this->password=$password;
    }
    public function getPassword(){
        return $this->password;
    }
}

?>