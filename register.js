$(document).ready(function() {
    $("#register-form").submit(function(event) {
      event.preventDefault();
  
      var username = $("#username").val();
      var password = $("#password").val();
  
      // Enviar dados para o servidor (pode ser feito usando AJAX)
  
      // Exemplo de requisição AJAX usando jQuery:
      $.ajax({
        type: "POST",
        url: "register.php", // Arquivo PHP responsável pelo cadastro no servidor
        data: { username: username, password: password },
        success: function(response) {
          $("#register-message").text(response);
        }
      });
    });
  });