function btnSacola(){
  window.location.href = "/carrinho.html"
}

function btnCardapio(){
    window.location.href = "/pedido.html"
  }

  function irSugestão(){
    window.location.href = "/sugestoes.html"
  }

function btnCardapioModis(){
  window.location.href = "/arielCardapio.html"
}

function criarModal() {
  const modal = document.createElement("div");
  modal.id = "popUpsAdicionar";
  modal.className = "popUpsAdicionar";
  modal.style.display = "none"; 

  document.body.appendChild(modal);
}

function trocarRede(){
  const whats = document.getElementById("whats")?.innerText || "WhatsApp";
  const insta = document.getElementById("insta")?.innerText || "Instagram";
  const tele = document.getElementById("tele")?.innerText || "Telegram";
  const face = document.getElementById("face")?.innerText || "Facebook";
  
  let modal = document.getElementById("popUpsAdicionar");

  // Se o modal não existir, criá-lo
  if (!modal) {
      criarModal();
      modal = document.getElementById("popUpsAdicionar");
  }

  modal.style.display = "flex";
  modal.innerHTML = `
      <div class="popUpEdit">
          <div class="btnsInputs">
              <h1>Escolha qual Rede Social deseja Editar?</h1>
          </div>
          <div class="btnsInputs">
              <label for="inputRedes">Escolha qual Rede Editar</label>
              <input list="redes" name="redes" id="inputRedes">

              <datalist id="redes">
                <option value="WhatsApp">WhatsApp</option>
                <option value="Instagram">Instagram</option>
                <option value="Telegram">Telegram</option>
                <option value="Facebook">Facebook</option>
              </datalist>
          </div>
          <div class="btnsSalvar">
              <button onclick="salvarContato()">Sim</button>
              <button onclick="fecharModal()">Não</button>
          </div>
      </div>
  `;
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById("popUpsAdicionar");
    if (modal) modal.style.display = "none";
}

function salvarContato(){
  const opiWhats = document.getElementById("inputRedes").value;
  document.getElementById("whats").innerText = opiWhats;
  fecharModal();
}
