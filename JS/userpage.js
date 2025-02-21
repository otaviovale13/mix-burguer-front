document.addEventListener("DOMContentLoaded", function () {
  var perfilTab = document.getElementById("perfil");
  var notificacoesTab = document.getElementById("notificacoes");
  var segurancaTab = document.getElementById("seguranca");
  var enderecoTab = document.getElementById("endereco");
  var formasdepagamentoTab = document.getElementById("formasdepagamento");
  var cuponsTab = document.getElementById("cupons");
  var pedidosTab = document.getElementById("pedidos");
  var favoritosTab = document.getElementById("favoritos");
  var sugestoesTab = document.getElementById("sugestoes");
  
  var voltarIndex = document.getElementById("voltarIndex");
  var local = document.getElementById("local");
  var voltarHome = document.getElementById("voltarHome");

  voltarIndex.addEventListener("click", function () {
    return (window.location.href = "./index.html");
  });
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menuToggle");
  menuToggle.innerHTML = `<span></span><span></span><span></span>`;
  document.querySelector(".cabecalhoCaixaBranca").appendChild(menuToggle);

  const menuLateral = document.querySelector(".menuLateral");
  menuToggle.addEventListener("click", function () {
    menuLateral.classList.toggle("sanduiche");
  });

  function closeMenu() {
    if (menuLateral.classList.contains("sanduiche")) {
      menuLateral.classList.remove("sanduiche");
    }
  }
  var mainCaixaBranca = document.getElementById("mainCaixaBranca");

  function loadPerfil() {
    local.innerHTML = `<i class="bi bi-person-circle"></i> Perfil`;
    mainCaixaBranca.innerHTML = `
        <div class="fotoUsuario">
            <img
              src="https://img.icons8.com/material-rounded/100/user.png"
              alt=""
              srcset=""
            />
            <p class="username">Rafael Fariaschenko</p>
            <p class="email">josemiguelfarias@univap.br</p>
          </div>
          <div class="tabelas">
            <div class="infoUsuario">
              <h2>Informações Pessoais</h2>
              <div class="tabelaInfo">
                <table>
                  <tr>
                    <th>Nome</th>
                    <td>José Miguel</td>
                  </tr>
                  <tr>
                    <th>Sobrenome</th>
                    <td>Rafael Farias</td>
                  </tr>
                  <tr>
                    <th>Telefone</th>
                    <td>(11) 3986-8102</td>
                  </tr>
                  <tr>
                    <th>Celular</th>
                    <td>(11) 99861-1591</td>
                  </tr>
                  <tr>
                    <th>Endereço</th>
                    <td>Rua Emilia Muraro Vanini 45, 206 - Itupeva, SP</td>
                  </tr>
                  <tr>
                    <th>CPF</th>
                    <td>***.927.148-**</td>
                  </tr>
                  <tr>
                    <th>RG</th>
                    <td>**.674.751-*</td>
                  </tr>
                  <tr>
                    <th>E-mail</th>
                    <td>josemiguelfarias@univap.br</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="detalhesUsuario">
              <h2>Detalhes da Conta</h2>
              <div class="tabelaDetalhes">
                <table>
                  <tr>
                    <th>Nome de Usuário</th>
                    <td>Rafael Fariaschenko</td>
                  </tr>
                  <tr>
                    <th>Conta Criada em</th>
                    <td>12/12/2024</td>
                  </tr>
                  <tr>
                    <th>Ultimo Login</th>
                    <td>05/02/2025</td>
                  </tr>
                  <tr>
                    <th>Status Membro</th>
                    <td>Comum</td>
                  </tr>
                  <tr>
                    <th>Conta Verificada</th>
                    <td>Verificada</td>
                  </tr>
                  <tr>
                    <th>Idioma</th>
                    <td>Português (Brasil)</td>
                  </tr>
                  <tr>
                    <th>Horário</th>
                    <td>UTC-3 (Horário de Brasília)</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>`;
    document
      .getElementById("btnSalvarPerfil")
      .addEventListener("click", SalvarPerfil);
  }

  voltarHome.addEventListener("click", function () {
    loadPerfil();
    closeMenu();
  });

  perfilTab.addEventListener("click", function () {
    loadPerfil();
    closeMenu();
  });

  notificacoesTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-bell"></i> Notificações`;
    mainCaixaBranca.innerHTML = `
    <div class="fotoUsuario">
            <img
              src="https://img.icons8.com/material-rounded/100/user.png"
              alt=""
              srcset=""
            />
            <p class="username">Rafael Fariaschenko</p>
            <p class="email">josemiguelfarias@univap.br</p>
          </div>
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Configurações de Notificações</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Permitir Notificações</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="permitirNotificacoes">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th>Notificar quando o pedido for aceito</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="notificarPedidoAceito">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th>Notificar quando o pedido estiver a caminho</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="notificarPedidoCaminho">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th>Notificar promoções e ofertas</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="notificarPromocoes">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>`;
    document
      .getElementById("btnSalvarPerfil")
      .addEventListener("click", SalvarPerfil);
    closeMenu();
  });
  function alterarSenha() {
    local.innerHTML = `<i class="bi bi-shield-lock"></i> Segurança`;
    mainCaixaBranca.innerHTML = `
  <div class="tabelas">
    <div class="infoUsuario">
      <h2>Configurações de Segurança</h2>
      <div class="tabelaInfo">
        <table>
          <tr>
            <th>Senha Atual</th>
            <td>
              <input type="password" id="senhaAtual" placeholder="Digite a senha atual">
            </td>
          </tr>
          <tr>
            <th>Nova Senha</th>
            <td>
              <input type="password" id="novaSenha" placeholder="Digite a nova senha">
            </td>
          </tr>
          <tr>
            <th>Confirmar Senha</th>
            <td>
              <input type="password" id="confirmarSenha" placeholder="Digite confirmar senha">
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="btn"><button id="btnSalvarPerfil">Salvar</button></div>`;

    mainCaixaBranca.style.paddingBottom = "20px";

    var divBtn = document.querySelector(".btn");
    divBtn.style.alignSelf = "center";
    divBtn.style.justifyContent = "end";
    divBtn.style.display = "flex";
    divBtn.style.width = "80%";
    divBtn.style.marginTop = "20px";
    divBtn.style.marginBottom = "0px";

    var btnSalvarPerfil = document.getElementById("btnSalvarPerfil");
    btnSalvarPerfil.style.cursor = "pointer";
    btnSalvarPerfil.style.backgroundColor = "none";
    btnSalvarPerfil.style.border = "1px solid  #FFBB00";
    btnSalvarPerfil.style.borderRadius = "12px";
    btnSalvarPerfil.style.color = "#FFBB00";
    btnSalvarPerfil.style.fontWeight = "bold";
    btnSalvarPerfil.style.fontSize = "16px";
    btnSalvarPerfil.style.padding = "7px 12px";
    btnSalvarPerfil.addEventListener("click", SalvarPerfil);

    var inputsenhaAtual = document.getElementById("senhaAtual");
    inputsenhaAtual.style.borderRadius = "12px";
    inputsenhaAtual.style.height = "23px";
    inputsenhaAtual.style.paddingLeft = "5px";

    var inputnovaSenha = document.getElementById("novaSenha");
    inputnovaSenha.style.borderRadius = "12px";
    inputnovaSenha.style.height = "23px";
    inputnovaSenha.style.paddingLeft = "5px";

    var inputconfirmarSenha = document.getElementById("confirmarSenha");
    inputconfirmarSenha.style.borderRadius = "12px";
    inputconfirmarSenha.style.height = "23px";
    inputconfirmarSenha.style.paddingLeft = "5px";
  }
  function SalvarPerfil() {
    var senhaAtual = document.getElementById("senhaAtual").value;
    var novaSenha = document.getElementById("novaSenha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senhaAtual == "" || novaSenha == "" || confirmarSenha == "") {
      alert("Preencha todos os campos!");
    } else if (novaSenha != confirmarSenha) {
      alert("As senhas não coincidem!");
    } else {
      alert("Senha alterada com sucesso!");
      return SegurancaTab();
    }
  }
  function SegurancaTab() {
    local.innerHTML = `<i class="bi bi-shield-lock"></i> Segurança`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Configurações de Segurança</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Verificação em Duas Etapas</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="verificacaoDuasEtapas">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th>Notificar Tentativas de Login</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="notificarTentativasLogin">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
            <tr>
              <th>Alterar Senha</th>
              <td>
                <span id="alterarSenha">Alterar</span>
              </td>
            </tr>
            <tr>
              <th>Ativar Autenticação Biométrica</th>
              <td>
                <label class="switch">
                  <input type="checkbox" id="autenticacaoBiometrica">
                  <span class="slider round"></span>
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>`;
    var AlterarSenha = document.getElementById("alterarSenha");
    AlterarSenha.addEventListener("click", alterarSenha);
    AlterarSenha.style.cursor = "pointer";
    AlterarSenha.style.color = "#007bff";
    AlterarSenha.style.textDecoration = "underline";
    AlterarSenha.style.fontWeight = "bold";
    closeMenu();
  }
  segurancaTab.addEventListener("click", SegurancaTab);

  enderecoTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-geo-alt"></i> Endereços`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Configurações de Endereço</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Endereço</th>
              <td id="Endereco">
                Rua Emilia Muraro Vanini 45, 206 - Itupeva, SP
              </td>
            </tr>
            <tr>
              <th>Cidade</th>
              <td id="cidade">
                Itupeva
              </td>
            </tr>
            <tr>
              <th>Estado</th>
              <td id="estado">
               SP
              </td>
            </tr>
            <tr>
              <th>CEP</th>
              <td id="cep">
                13295-000
              </td>
            </tr>
            <tr>
              <th>País</th>
              <td id="pais">
                Brasil
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <button id="editarEndereco">Editar</button>
          <button id="salvarEndereco" style="display:none;">Salvar</button>`;
    closeMenu();

    document.getElementById("editarEndereco").addEventListener("click", function () {
      toggleEditEndereco(true);
  });
  
  document.getElementById("salvarEndereco").addEventListener("click", function () {
      toggleEditEndereco(false);
  });
  
  function toggleEditEndereco(editMode) {
      const fields = ["Endereco", "cidade", "estado", "cep", "pais"];
      let allFilled = true; // Flag para verificar se todos os campos estão preenchidos
  
      fields.forEach(field => {
          const td = document.getElementById(field);
  
          if (editMode) {
              const value = td.textContent.trim();
              td.innerHTML = `<input type="text" value="${value}" id="input_${field}">`;
          } else {
              const input = document.getElementById(`input_${field}`);
  
              if (input) { 
                  const newValue = input.value.trim();
  
                  if (!newValue) {
                      allFilled = false;
                      input.style.border = "2px solid red"; // Destaca o erro no campo
                      console.warn(`Campo ${field} está vazio!`);
                  } else {
                      input.style.border = ""; // Remove a borda vermelha se preenchido
                  }
              }
          }
      });
  
      // Se algum campo estiver vazio, impedir a mudança para texto e exibir alerta
      if (!editMode && !allFilled) {
          alert("Todos os campos devem ser preenchidos!");
          return;
      }
  
      // Se todos os campos estiverem preenchidos, converter os inputs de volta para texto
      if (!editMode) {
          fields.forEach(field => {
              const td = document.getElementById(field);
              const input = document.getElementById(`input_${field}`);
              td.innerText = input.value.trim(); // Salva o valor no <td>
          });
      }
  
      // Alterna os botões somente se todos os campos estiverem preenchidos
      document.getElementById("editarEndereco").style.display = editMode ? "none" : "inline";
      document.getElementById("salvarEndereco").style.display = editMode ? "inline" : "none";
  }
  
  
  });

  formasdepagamentoTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-credit-card"></i> Formas de Pagamento`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Configurações de Pagamento</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Cartão de Crédito</th>
              <td id="cartaoCredito">
                1234 5678 9012 3456
              </td>
            </tr>
            <tr>
              <th>Nome no Cartão</th>
              <td id="nomeCartao">
                José Miguel Farias
              </td>
            </tr>
            <tr>
              <th>Data de Validade</th>
              <td id="validadeCartao">
                12/2025
              </td>
            </tr>
            <tr>
              <th>CVV</th>
              <td id="cvvCartao">
                123
              </td>
            </tr>
            <tr>
              <th>CPF do Titular</th>
              <td id="cpfCartao">
                ***.927.148-**
              </td>
            </tr>
            <tr>
              <th>Endereço de Cobrança</th>
              <td id="enderecoCobranca">
                Rua Emilia Muraro Vanini 45, 206 - Itupeva, SP
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <button id="editarCartao">Editar</button>
          <button id="salvarCartao" style="display:none;">Salvar</button>`;
    closeMenu();

    document.getElementById("editarCartao").addEventListener("click", function () {
      toggleEditCartao(true);
  });
  
  document.getElementById("salvarCartao").addEventListener("click", function () {
    toggleEditCartao(false);
  });
  
  function toggleEditCartao(editMode) {
      const fields = ["cartaoCredito", "nomeCartao", "validadeCartao", "cvvCartao", "cpfCartao", "enderecoCobranca"];
      let allFilled = true; // Flag para verificar se todos os campos estão preenchidos
  
      fields.forEach(field => {
          const td = document.getElementById(field);
  
          if (editMode) {
              const value = td.textContent.trim();
              td.innerHTML = `<input type="text" value="${value}" id="input_${field}">`;
          } else {
              const input = document.getElementById(`input_${field}`);
  
              if (input) { 
                  const newValue = input.value.trim();
  
                  if (!newValue) {
                      allFilled = false;
                      input.style.border = "2px solid red"; // Destaca o erro no campo
                      console.warn(`Campo ${field} está vazio!`);
                  } else {
                      input.style.border = ""; // Remove a borda vermelha se preenchido
                  }
              }
          }
      });
  
      // Se algum campo estiver vazio, impedir a mudança para texto e exibir alerta
      if (!editMode && !allFilled) {
          alert("Todos os campos devem ser preenchidos!");
          return;
      }
  
      // Se todos os campos estiverem preenchidos, converter os inputs de volta para texto
      if (!editMode) {
          fields.forEach(field => {
              const td = document.getElementById(field);
              const input = document.getElementById(`input_${field}`);
              td.innerText = input.value.trim(); // Salva o valor no <td>
          });
      }
  
      // Alterna os botões somente se todos os campos estiverem preenchidos
      document.getElementById("editarCartao").style.display = editMode ? "none" : "inline";
      document.getElementById("salvarCartao").style.display = editMode ? "inline" : "none";
  }
  });

  cuponsTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-tags"></i> Meus Cupons`;
    mainCaixaBranca.innerHTML = `
       <div class="tabelas">
      <div class="infoUsuario">
        <h2>Detalhes do Cupom</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Descrição</th>
              <td>10% de desconto em pedidos acima de R$50,00</td>
            </tr>
            <tr>
              <th>Validade</th>
              <td>30/06/2025</td>
            </tr>
            <tr>
              <th>Condições</th>
              <td>Válido apenas para novos usuários</td>
            </tr>
            <tr>
              <th>Código do Cupom</th>
              <td>DESCONTO10</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Detalhes do Cupom</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Descrição</th>
              <td>15% de desconto em pedidos acima de R$100,00</td>
            </tr>
            <tr>
              <th>Validade</th>
              <td>07/04/2025</td>
            </tr>
            <tr>
              <th>Condições</th>
              <td>Válido apenas para novos usuários</td>
            </tr>
            <tr>
              <th>Código do Cupom</th>
              <td>DESCONTO15</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Detalhes do Cupom</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Descrição</th>
              <td>20% de desconto em pedidos acima de R$200,00</td>
            </tr>
            <tr>
              <th>Validade</th>
              <td>15/04/2025</td>
            </tr>
            <tr>
              <th>Condições</th>
              <td>Válido apenas para novos usuários</td>
            </tr>
            <tr>
              <th>Código do Cupom</th>
              <td>DESCONTO20</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    `;
    closeMenu();
  });

  pedidosTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-cart"></i> Meus Pedidos`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Pedidos Concluídos</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Pedido</th>
              <td>#12345</td>
            </tr>
            <tr>
              <th>Data</th>
              <td>01/01/2025</td>
            </tr>
            <tr>
              <th>Status</th>
              <td class="concluido">CONCLUÍDO</td>
            </tr>
            <tr>
              <th>Valor</th>
              <td>R$ 150,00</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Pedidos Cancelados</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Pedido</th>
              <td>#12346</td>
            </tr>
            <tr>
              <th>Data</th>
              <td>02/01/2025</td>
            </tr>
            <tr>
              <th>Status</th>
              <td class="cancelado">CANCELADO</td>
            </tr>
            <tr>
              <th>Valor</th>
              <td>R$ 200,00</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Pedidos em Andamento</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Pedido</th>
              <td>#12347</td>
            </tr>
            <tr>
              <th>Data</th>
              <td>03/01/2025</td>
            </tr>
            <tr>
              <th>Status</th>
              <td class="andamento">EM ANDAMENTO</td>
            </tr>
            <tr>
              <th>Valor</th>
              <td>R$ 250,00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>`;
    closeMenu();
  });

  favoritosTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-heart"></i> Favoritos`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Favoritos</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Lanche</th>
              <td>Classic</td>
            </tr>
            <tr>
              <th>Descrição</th>
              <td>Experimente o nosso Classic Burger: Carne smash suculenta, queijo derretido, alface americana fresca, tomate maduro, cebola roxa crocante e a nossa exclusiva maionese da casa, tudo isso servido em um pão brioche macio. Uma combinação clássica que nunca sai de moda, perfeita para qualquer ocasião na Mix Burguer. </td>
            </tr>
            <tr>
              <th>Preço</th>
              <td>R$ 25,95</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Favoritos</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Lanche</th>
              <td>Combo Casal</td>
            </tr>
            <tr>
              <th>Descrição</th>
              <td>Aproveite este combo com dois hambúrgueres Classic e dois Mix, acompanhado de um refrigerante de 1,5 litros para completar sua refeição!Perfeito para compartilhar com amigos e família. </td>
            </tr>
            <tr>
              <th>Preço</th>
              <td>R$ 80,00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>`;
    closeMenu();
  });

  sugestoesTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-chat-left"></i> Minhas Sugestões`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
      <div class="infoUsuario">
        <h2>Minhas Sugestões</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Data</th>
              <td>01/01/2025</td>
            </tr>
            <tr>
              <th>Sugestão</th>
              <td>Adicionar mais opções vegetarianas no cardápio.</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>Recebida</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Minhas Sugestões</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Data</th>
              <td>15/02/2024</td>
            </tr>
            <tr>
              <th>Sugestão</th>
              <td>Oferecer descontos para clientes frequentes.</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>APROVADA</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="infoUsuario">
        <h2>Minhas Sugestões</h2>
        <div class="tabelaInfo">
          <table>
            <tr>
              <th>Data</th>
              <td>28/03/2024</td>
            </tr>
            <tr>
              <th>Sugestão</th>
              <td>Implementar um programa de fidelidade.</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>Em Análise</td>
            </tr>
          </table>
        </div>
      </div>
    </div>`;
    closeMenu();
  });

  loadPerfil();
});
