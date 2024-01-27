document.getElementById('register-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('register-username').value;
  var password = document.getElementById('register-password').value;
  var confirmPassword = document.getElementById('register-confirm-password').value;

  if (username === '' || password === '' || confirmPassword === '') {
    document.getElementById('register-message').textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById('register-message').textContent = 'As senhas não correspondem.';
    return;
  }

  if (localStorage.getItem(username)) {
    document.getElementById('register-message').textContent = 'Nome de usuário já existe.';
    return;
  }

  localStorage.setItem(username, password);
  document.getElementById('register-message').textContent = 'Cadastro realizado com sucesso!';
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  if (username === '' || password === '') {
    document.getElementById('login-message').textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  if (!localStorage.getItem(username) || localStorage.getItem(username) !== password) {
    document.getElementById('login-message').textContent = 'Nome de usuário ou senha incorretos.';
    return;
  }

  document.getElementById('login-message').textContent = 'Login bem sucedido!';
  window.location.href = 'sobre.html'; // Redireciona para a página sobre.html
});