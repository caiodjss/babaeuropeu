function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/src/assets/avatar-light.png");
  } else {
    img.setAttribute("src", "/src/assets/avatar.png");
  }
}


function mostrarTexto() {
  const container = document.querySelector(".login-container");
  if (container) container.innerHTML = "";  // Limpa o formulário de login atual
  
  const novaHtml = `
    <h2>Recuperação de Senha</h2>
    <p>Escolha uma opção para recuperar sua senha:</p>
    <form id="recover-form">
      <label for="email">Recuperar via e-mail</label>
      <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
    
      <label for="sms">Ou via SMS</label>
      <input type="text" id="sms" name="sms" placeholder="Digite seu número de telefone" required>
    
      <button type="submit" class="login-btn">Recuperar Senha</button>
    </form>
    <button id="back-button" onclick="voltarLogin()">Voltar</button>
  `;
  
  // Adiciona o novo conteúdo ao container
  container.innerHTML = novaHtml;
}

function voltarLogin() {
  const container = document.querySelector(".login-container");
  if (container) container.innerHTML = "";  // Limpa o conteúdo atual
  
  const loginHtml = `
    <h2>Login</h2>
    <form action="#" method="POST">
      <label for="username">Nome de usuário</label>
      <input type="text" id="username" name="username" placeholder="Digite seu nome de usuário" required>
  
      <label for="password">Senha</label>
      <input type="password" id="password" name="password" placeholder="Digite sua senha" required>
  
      <button type="submit" class="login-btn">Entrar</button>
    </form>
    <a href="#" onclick="mostrarTexto()">Esqueci a senha</a>
  `;
  
  // Recria o formulário de login
  container.innerHTML = loginHtml;
}
