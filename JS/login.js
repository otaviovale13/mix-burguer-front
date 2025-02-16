document.addEventListener("DOMContentLoaded", function () {
  var loginTab = document.getElementById("aLogin");
  var registerTab = document.getElementById("aCadastro");
  var formArea = document.getElementById("formArea");

  function loadLoginForm() {
    formArea.innerHTML = `<div class="dados">
                <div class="input-group">
                  <input type="text" id="email" placeholder="E-mail" />
                </div>
                <div class="input-group">
                  <input type="password" id="senha" placeholder="Senha" />
                </div>
              </div>
              <div class="btns">
                <div class="EsqueceuSenha">Esqueceu a senha?</div>
                <button type="button" id="btnLogin" class="btnLogin">Login</button>
              </div>`;
    document.getElementById("btnLogin").addEventListener("click", VerificaLogin);
  }

  function VerificaLogin(event) {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (email === "ariel" && senha === "1234") {
      alert("Bem vindo Administrador Ariel");
      window.location.href = "/arielHome.html";

    } else if (email !== "" && senha !== "") {
      alert(`Bem vindo, ${email}`);
      window.location.href = "/index.html";
    } else {
      alert("Por favor, preencha todos os campos");
    }
  }

  loginTab.addEventListener("click", function () {
    loadLoginForm();
    loginTab.classList.remove("inativo");
    loginTab.classList.add("ativo");
    registerTab.classList.remove("ativo");
    registerTab.classList.add("inativo");
  });

  registerTab.addEventListener("click", function () {
    formArea.innerHTML = `
              <div class="dados">
                <div class="input-group">
                  <input type="text" id="email" placeholder="E-mail" />
                </div>
                <div class="input-group">
                  <input type="password" id="senha" placeholder="Senha" />
                </div>
                <div class="input-group">
                  <input type="password" placeholder="Confirmar Senha" />
                </div>
                <div class="input-group">
                  <input type="text" placeholder="Telefone" />
                </div>
              </div>
              <div class="btns">
                <button class="btnLogin">Cadastrar</button>
              </div>`;
    registerTab.classList.remove("inativo");
    registerTab.classList.add("ativo");
    loginTab.classList.remove("ativo");
    loginTab.classList.add("inativo");
  });

  // Carrega o formulário de login por padrão ao carregar a página
  loadLoginForm();
});

