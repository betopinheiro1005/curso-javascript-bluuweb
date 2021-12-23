<?php

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

if($usuario === '' || $senha === ''){
    echo json_encode('error');
} else {
    echo json_encode('Correto!<br>Usuário: '. $usuario . '<br>Senha: ' . $senha);
}