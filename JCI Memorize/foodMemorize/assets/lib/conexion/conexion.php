<?php
    class conexion{
        private $dsn;
        private $server;
        private $usuario;
       //private $puerto;
        private $baseDatos;
        private $password;

        public function __construct(){
            $this->server='localhost';
            $this->usuario='postgres';
            // $this->puerto="5432";
            $this->baseDatos='prueba';
            $this->password='123456';
        }
        public function conectar(){
            $dsn ="pgsql:host=$this->server;dbname=$this->baseDatos"; 
            try{
                $conexion = new PDO($dsn, $this->usuario, $this->password);
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conexion;
            } catch(PDOException $e){
                // Lanzar excepción con salida controlada en JSON
                echo json_encode([
                    "success" => false,
                    "message" => "Error al conectar a la base de datos: " . $e->getMessage()
                ]);
                exit; // Asegurar que el script se detenga
            }
        }
        
        public function consultar($querysql, $values) {
            $conexion = $this->conectar();
            try {
                $consulta = $conexion->prepare($querysql);
                $consulta->execute($values);
                $resultados = [];
                while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
                    $resultados[] = $fila;
                }
                return $resultados;
            } catch (PDOException $e) {
                echo json_encode(["success" => false, "message" => "Error de consulta: " . $e->getMessage()]);
                exit;
            }
        }
        
        
        public function ejecutar($querysql, $values){
            $conexion = $this->conectar();
            try {
                $queryEjecutar = $conexion->prepare($querysql);
                $resultado = $queryEjecutar->execute($values);
                return $resultado; // Devuelve true si la ejecución fue exitosa, false en caso contrario
            } catch (PDOException $e) {
                error_log("Error al ejecutar query: " . $e->getMessage());
                return false;
            }
        }

        public function consultaValor($querysql, $values = []){ // Añadir valor por defecto
            $conexion = $this->conectar();
            try {
                $consulta = $conexion->prepare($querysql);
                $consulta->execute($values);
                $resultados = [];
                while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
                    $resultados[] = $fila;
                }
                return $resultados;
            } catch (PDOException $e) {
                throw new Exception("Error de consulta: " . $e->getMessage());
            }
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