<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validação e inserção no banco de dados (você precisa implementar isso)

    // Exemplo básico para resposta
    echo "Cadastro bem-sucedido!";
}
?>
