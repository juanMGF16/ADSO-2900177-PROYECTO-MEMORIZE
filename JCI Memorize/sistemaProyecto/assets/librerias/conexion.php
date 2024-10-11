<?php
    class conexion{
        private $dsn;
        private $server;
        private $usuario;
        private $baseDatos;
        private $password;

        public function __construct(){
            $this->server='localhost';
            $this->usuario='postgres';
            $this->baseDatos='sistemaPro';
            $this->password='1234567';
        }
        public function conectar(){
            $dsn ='pgsql:host='.$this->server.';dbname='.$this->baseDatos.'';
            try{
                $conexion = new PDO($dsn,$this->usuario,$this->password);
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                echo "Conexion exitosa a la base de datos";
            } catch(PDOException $e){
                echo "Error al conectar a la base de datos: " . $e->getMessage();
            }
            return $conexion;
        } 
        public function consulta($querysql){
            $conexion=$this->conectar();
            $consulta = $conexion->query($querysql);
            while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $resultados[] = $fila;
            }
            return $resultados;
        }
        public function ejecutar($querysql,$values){
            $conexion=$this->conectar();
            $queryEjecutar = $conexion->prepare($querysql);
            $queryEjecutar->execute($values);
        }

        public function consultaValor($querysql,$values){
            $conexion=$this->conectar();
            $consulta = $conexion->prepare($querysql);
            $consulta->execute($values);
            while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $resultados[] = $fila;
            }
            return $resultados;
        }
        public function numeroRegistro($querysql,$values){
            $conexion=$this->conectar();
            $consulta = $conexion->prepare($querysql);
            $consulta->execute($values);
            $count = $consulta->fetchColumn();
            return $count;
        }
    
    }
?>