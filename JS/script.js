function btnSacola(){
  window.location.href = "./carrinho.html"
}

function btnCardapio(){
    window.location.href = "./pedido.html"
  }

  function irSugestão(){
    window.location.href = "./sugestoes.html"
  }

  function irSugestãoAriel(){
    window.location.href = "./sugestaoAriel.html"
  }

function btnCardapioModis(){
  window.location.href = "./arielCardapio.html"
}

function criarModal() {
  const modal = document.createElement("div");
  modal.id = "popUpsAdicionar";
  modal.className = "popUpsAdicionar";
  modal.style.display = "none";
  document.body.appendChild(modal);
}

function trocarRede() {
  let modal = document.getElementById("popUpsAdicionar");

  if (!modal) {
      criarModal();
      modal = document.getElementById("popUpsAdicionar");
  }

  modal.style.display = "flex";
  modal.innerHTML = `
    <div class="popUpEdit">
      <div class="btnsInputs">
          <h1>Editar Rede Social</h1>
      </div>
      <div class="btnsInputs">
          <label for="inputRedes">Escolha qual Rede Editar</label>
<select class="border-solid-1px-black text-black text-center"
        id="inputRedes">
    <option value="WhatsApp">WhatsApp</option>
    <option value="Instagram">Instagram</option>
    <option value="Telefone">Telefone</option>
    <option value="Facebook">Facebook</option>
</select>

      </div>
      <div class="btnsInputs">
          <label for="inputNome">Mudar o Nome</label>
          <input class="border-solid-1px-black text-black text-center"
                 type="text"
                 id="inputNome">
      </div>
      <div class="btnsInputs">
          <label for="inputLink">Mudar o Link</label>
          <input class="border-solid-1px-black text-black text-center"
                 type="text"
                 id="inputLink">
      </div>
      <div class="btnsSalvar">
          <button class="btnCardapioAriel" onclick="salvarContato()">Sim</button>
          <button class="btnCardapioAriel" onclick="fecharModal()">Não</button>
      </div>
  </div>
  `;

  // Adiciona um evento para atualizar os campos ao selecionar uma rede
  document.getElementById("inputRedes").addEventListener("change", atualizarCamposModal);
}

function atualizarCamposModal() {
  const redeSelecionada = document.getElementById("inputRedes").value;
  let nomeAtual = "";
  let linkAtual = "";

  if (redeSelecionada === "WhatsApp") {
      nomeAtual = document.getElementById("whats")?.textContent || "WhatsApp";
      linkAtual = document.getElementById("whatsLink")?.href || "";
  } else if (redeSelecionada === "Instagram") {
      nomeAtual = document.getElementById("insta")?.textContent || "Instagram";
      linkAtual = document.getElementById("instaLink")?.href || "";
  } else if (redeSelecionada === "Telefone") {
      nomeAtual = document.getElementById("tele")?.textContent || "Telefone";
      linkAtual = document.getElementById("teleLink")?.href.replace("tel:", "") || "";
  } else if (redeSelecionada === "Facebook") {
      nomeAtual = document.getElementById("face")?.textContent || "Facebook";
      linkAtual = document.getElementById("faceLink")?.href || "";
  }

  document.getElementById("inputNome").value = nomeAtual;
  document.getElementById("inputLink").value = linkAtual;
}

function fecharModal() {
  const modal = document.getElementById("popUpsAdicionar");
  if (modal) modal.style.display = "none";
}

function salvarContato() {
  const redeSelecionada = document.getElementById("inputRedes").value;
  const novoNome = document.getElementById("inputNome").value;
  const novoLink = document.getElementById("inputLink").value;

  if (redeSelecionada === "WhatsApp") {
      document.getElementById("whats").textContent = novoNome;
      document.getElementById("whatsLink").href = novoLink;
  } else if (redeSelecionada === "Instagram") {
      document.getElementById("insta").textContent = novoNome;
      document.getElementById("instaLink").href = novoLink;
  } else if (redeSelecionada === "Telefone") {
      document.getElementById("tele").textContent = novoNome;
      document.getElementById("teleLink").href = `tel:${novoLink}`;
  } else if (redeSelecionada === "Facebook") {
      document.getElementById("face").textContent = novoNome;
      document.getElementById("faceLink").href = novoLink;
  }

  fecharModal();
}


function trocarVideoEImagem() {
  let modal = document.getElementById("popUpsAdicionar");

  if (!modal) {
      criarModal();
      modal = document.getElementById("popUpsAdicionar");
  }

  modal.style.display = "flex";

  modal.innerHTML = `
      <div class="popUpEdit">
          <div class="btnsInputs">
              <h1>Escolha qual item editar</h1>
          </div>
          <div class="btnsInputs">
              <label for="inputRedes">Escolha:</label>
              <select id="selecaoImagemVideo">
                <option value="videosmais1">Vídeo - 1</option>
                <option value="foto1">Foto - 1</option>
                <option value="videosmais2">Vídeo - 2</option>
                <option value="foto2">Foto - 2</option>
                <option value="videosmais3">Vídeo - 3</option>
                <option value="foto3">Foto - 3</option>
                <option value="videosmais4">Vídeo - 4</option>
                <option value="foto4">Foto - 4</option>
              </select>
          </div>
          <div class="btnsInputs">
              <label for="inputArquivo">Enviar Arquivo:</label>
              <input type="file" id="inputArquivo" accept="image/*,video/*">
          </div>
          <div id="btnLink" class="btnsInputs">
              <label for="inputLink">Enviar Link:</label>
              <input type="text" id="inputLinkFotos">
          </div>
          <div class="btnsSalvar">
              <button class="btnCardapioAriel" onclick="salvarAlteracao()">Salvar</button>
              <button class="btnCardapioAriel" onclick="fecharModal()">Fechar</button>
          </div>
      </div>
  `;
}

function fecharModal() {
  document.getElementById("popUpsAdicionar").style.display = "none";
}

function salvarAlteracao() {
  let selecao = document.getElementById("selecaoImagemVideo").value;
  let novoLink = document.getElementById("inputLinkFotos").value;
  let novoArquivo = document.getElementById("inputArquivo").files[0];
  let btnLink = document.getElementById("btnLink");

  let elemento = document.getElementById(selecao);

  if (!elemento) {
    console.error(`Elemento com ID '${selecao}' não encontrado.`);
    return;
  }

  if (selecao.startsWith("foto")) {
    btnLink.style.display = "none";
} else {
    btnLink.style.display = "flex";
}

  if (selecao.startsWith("video")) {
    if (novoLink) {
      elemento.href = novoLink;
    }

    if (novoArquivo && novoArquivo.type.startsWith("image/")) {
      let reader = new FileReader();
      reader.onload = function (e) {
        elemento.style.backgroundImage = `url('${e.target.result}')`;
        elemento.style.backgroundSize = "cover";
        elemento.style.backgroundPosition = "center";
      };
      reader.readAsDataURL(novoArquivo);
    }
  } 
  else if (selecao.startsWith("foto")) {
    if (novoLink) {
      elemento.src = novoLink;
    }

    if (novoArquivo && novoArquivo.type.startsWith("image/")) {
      let reader = new FileReader();
      reader.onload = function (e) {
        elemento.src = e.target.result;
      };
      reader.readAsDataURL(novoArquivo);
    }
  }

  fecharModal();
}

function btnPerfil(){
  window.location.href = "./userpage.html"
}

function btnPerfilAdm(){
  window.location.href = "./admpage.html"
}