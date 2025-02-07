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
  const whats = document.getElementById("whats").textContent
  const insta = document.getElementById("insta").textContent
  const tele = document.getElementById("tele").textContent
  const face = document.getElementById("face").textContent
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "flex";
  modal.innerHTML = `
      <div class="popUpEdit">
          <div class="btnsInputs">
              <h1>Escolha qual Rede Social deseja Editar?</h1>
          </div>
          <div class="btnsInputs">
            <select name="redes" id="redes">
              <option value="Whatzaap">Whatzaap</option>
              <option value="Telefone">Telefone</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
            </select>
          </div>
          <div class="btnsInputs">
            <label>Trocar Rede</label>
            <input type="text" value=
          </div>
          <div class="btnsSalvar">
              <button>Sim</button>
              <button>Não</button>
          </div>
      </div>
  `;
}