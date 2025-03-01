<?php

require __DIR__ . '/vendor/autoload.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\Server\IoServer;

class ChatServer implements MessageComponentInterface {
    protected $clients;
    protected $rooms;
    protected $hosts; // Para guardar el anfitrión de cada sala

    public function __construct() {
        $this->clients = new \SplObjectStorage;
        $this->rooms = [];
        $this->hosts = [];
    }

    // Función para generar un código de sala aleatorio de 8 dígitos
    private function generateRoomCode(): string {
        $characters = '0123456789';
        $roomCode = '';
        for ($i = 0; $i < 6; $i++) {
            $roomCode .= $characters[random_int(0, strlen($characters) - 1)];
        }
        return $roomCode;
    }

    public function onOpen(ConnectionInterface $conn) {
        $this->clients->attach($conn);
        echo "Nueva conexión: {$conn->resourceId}\n";
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        $data = json_decode($msg, true);

        switch ($data['action']) {
            case 'create_room':
                $roomCode = $this->generateRoomCode(); // Genera el código aleatorio de 8 dígitos
                $this->rooms[$roomCode] = [$from];
                $this->hosts[$roomCode] = $from; // El creador es el anfitrión
                $from->send(json_encode(['action' => 'room_created', 'roomCode' => $roomCode]));
                break;

                case 'join_room':
                    $roomCode = $data['roomCode'] ?? null;
                    if (isset($this->rooms[$roomCode])) {
                        // Evita añadir al cliente si ya está en la sala
                        if (!in_array($from, $this->rooms[$roomCode])) {
                            $this->rooms[$roomCode][] = $from;
                        }
                        
                        // Obtener la lista de todos los usuarios en la sala
                        $usuariosSala = [];
                        foreach ($this->rooms[$roomCode] as $client) {
                            $usuariosSala[] = [
                                'nombre' => $client->userName, // Asegúrate de que cada cliente tenga un atributo userName
                                'puntaje' => $client->score, // Suponiendo que el puntaje esté guardado
                                'perfil' => $client->profilePic // Suponiendo que la foto de perfil esté guardada
                            ];
                        }
                
                        // Enviar la lista de usuarios a todos en la sala
                        foreach ($this->rooms[$roomCode] as $client) {
                            $client->send(json_encode([
                                'action' => 'update_room',
                                'usuarios' => $usuariosSala
                            ]));
                        }
                        
                        $from->send(json_encode(['action' => 'joined_room', 'roomCode' => $roomCode]));
                    } else {
                        $from->send(json_encode(['action' => 'error', 'message' => 'Sala no encontrada']));
                    }
                    break;
                

            case 'chat':
                $roomCode = $data['roomCode'] ?? null;
                $message = $data['message'] ?? '';
                $sender = $data['sender'] ?? 'Anónimo';

                if (isset($this->rooms[$roomCode])) {
                    foreach ($this->rooms[$roomCode] as $client) {
                        $client->send(json_encode([
                            'action' => 'chat',
                            'message' => $message,
                            'sender' => $sender
                        ]));
                    }
                } else {
                    $from->send(json_encode([
                        'action' => 'error',
                        'message' => 'Sala no encontrada para el chat'
                    ]));
                }
                break;

            case 'start_game':
                $roomCode = $data['roomCode'] ?? null;
                if (isset($this->rooms[$roomCode])) {
                    if ($this->isHost($roomCode, $from)) { // Verifica si es el anfitrión
                        foreach ($this->rooms[$roomCode] as $client) {
                            $client->send(json_encode([
                                'action' => 'game_started',
                                'message' => 'El juego ha comenzado. ¡Buena suerte!'
                            ]));
                        }
                    } else {
                        $from->send(json_encode([
                            'action' => 'error',
                            'message' => 'Solo el anfitrión puede iniciar el juego.'
                        ]));
                    }
                } else {
                    $from->send(json_encode([
                        'action' => 'error',
                        'message' => 'Sala no encontrada'
                    ]));
                }
                break;
        }
    }

    public function onClose(ConnectionInterface $conn) {
        $this->clients->detach($conn);

        foreach ($this->rooms as $roomCode => $clients) {
            $this->rooms[$roomCode] = array_filter(
                $clients,
                fn($client) => $client !== $conn
            );

            // Elimina salas vacías
            if (empty($this->rooms[$roomCode])) {
                unset($this->rooms[$roomCode]);
                unset($this->hosts[$roomCode]); // Limpia el anfitrión
            }
        }

        echo "Conexión cerrada: {$conn->resourceId}\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Error: {$e->getMessage()}\n";
        $conn->close();
    }

    /**
     * Verifica si una conexión es el anfitrión de una sala
     */
    private function isHost(string $roomCode, ConnectionInterface $conn): bool {
        return isset($this->hosts[$roomCode]) && $this->hosts[$roomCode] === $conn;
    }
}

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new ChatServer()
        )
    ),
    8080
);

echo "Servidor WebSocket corriendo en ws://localhost:8080\n";
$server->run();
