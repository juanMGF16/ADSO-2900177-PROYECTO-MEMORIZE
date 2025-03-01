<?php 
class DatosPersona{
    private $emailPersona;
    private $password;
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