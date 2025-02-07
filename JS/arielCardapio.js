let Categorias = {
    Destaques: [
        { 
            Nome: "COMBO CASAL", 
            Descricao: "2 hambúrguer top onion 200gramas de batata crocante 1 porção de anel de cebola e 2 coca cola lata",
            Preco: "R$ 68,00",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FLUGWlenr9ACZhRV86ec1_900x900.webp?alt=media&token=7b4acc66-64f5-4bd0-86d5-bb82b0350f38",
        },
        { 
            Nome: "COMBO FAMILIA : 2 Classic + 2 Mix + 1 Refrigerante 1,5L", 
            Descricao: "Aproveite este combo com dois hambúrgueres Classic e dois Mix, acompanhado de um refrigerante de 1,5 litros para completar sua refeição!Perfeito para compartilhar com amigos e família.",
            Preco: "R$ 80,00",
            Imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZzTc6D3nHxSlyt6PMJY6V_CHolPuGPfnXA&s",
        },
    ],
    Hambúrguers: [
        { 
            Nome: "Mix", 
            Descricao: "Nosso clássico e irresistível Mix: Carne smash suculenta, queijo derretido e maionese da casa exclusiva, tudo servido em um pão brioche macio. Uma combinação perfeita de simplicidade e sabor que agrada a todos os paladares.",
            Preco: "R$ 21,95",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FsQOGG266owKD412TDneW_900x900.webp?alt=media&token=0482d83c-d900-454a-b486-98abb3eae5f9",
        },
        { 
            Nome: "Classic", 
            Descricao: "Experimente o nosso Classic Burger: Carne smash suculenta, queijo derretido, alface americana fresca, tomate maduro, cebola roxa crocante e a nossa exclusiva maionese da casa, tudo isso servido em um pão brioche macio. Uma combinação clássica que nunca sai de moda, perfeita para qualquer ocasião na Mix Burguer.",
            Preco: "R$ 25,95",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2F6D3H0y7gvVbjla1lTWJ1_900x900.webp?alt=media&token=94da58c9-07f1-456e-8c9a-bb124c83e0ac",
        },
    ],
}

const Adicionais = [
        { 
            Nome: "Batata", 
            Preco: "R$ 8,90",
            Imagem: "IMGS/1738688942957-removebg.png",
        },
        { 
            Nome: "Anel de Cebola", 
            Preco: "R$ 16,00",
            Imagem: "IMGS/1738688943009-removebg.png",
        },
        { 
            Nome: "Coca Cola", 
            Preco: "R$ 5,00",
            Imagem: "IMGS/coca lata.png",
        },
    ]

const categorias = document.getElementById("categorias")

categorias.innerHTML = Object.keys(Categorias)
    .map(categoria => `
            <div class="categoria">
                <h1>${categoria}</h1>
                ${Categorias[categoria]
                    .map(item => `
                            <div class="produtos" onclick="popUp('${item.Nome}', '${item.Descricao}', '${item.Preco}', '${item.Imagem}',)"> 
                                <div>
                                    <h2 class="itemTitulo">${item.Nome}</h2>
                                    <h3 class="descricao">${item.Descricao}</h3>
                                    <h2 class="preco">${item.Preco}</h2>
                                </div>
                                <div class="divImg">
                                    <img src="${item.Imagem}" />
                                </div>
                            </div>
                            <div class="btnsRemoveEEdit">
                              <button class="btnCardapio">Remover</button>
                              <button class="btnCardapio">Editar</button>
                              <button class="btnCardapio">Adicionar Adicionais</button>
                              <button class="btnCardapio">Remover Adicionais</button>
                              <button class="btnCardapio">Editar Adicionais</button>
                            </div>
                        `)  
                        .join("")}
                        <div class="btnsRemoveEEdit">
                              <button class="btnCardapio">Remover</button>
                        </div>
            </div>
        `)
        .join("")

        function buscarLanche() {
            const inputBuscar = document.getElementById("inputBuscar").value.toLowerCase();
            document.querySelectorAll(".categoria").forEach(categoria => {
                let visibilidade = false;
                categoria.querySelectorAll(".produtos").forEach(item => {
                    item.style.display = item.textContent.toLowerCase().includes(inputBuscar) ? "" : "none";
                    if (item.style.display === "") visibilidade = true;
                });
                categoria.style.display = visibilidade ? "" : "none";
            });
        }

function criarModal() {
  const modal = document.createElement("div");
  modal.id = "popUpsAdicionar";
  modal.className = "popUpsAdicionar";
  modal.style.display = "none"; 

  document.body.appendChild(modal);
}

function adicionarCate() {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "flex";

  modal.innerHTML = `
    <div class="popUpEdit">
    <div class="btnsInputs">
      <label>Nome da Categoria:</label>
      <input id="inputAdicionais" type="text" />
    </div>
    <div class="btnsSalvar">
      <button onclick="salvarCategoria()">Salvar</button>
      <button onclick="fecharModal()">Fechar</button>
    </div>
    </div>
  `;
}

function salvarCategoria(){
  const inputAdicionais = document.getElementById("inputAdicionais").value.trim();

  if(inputAdicionais !== ""){
    if(!Categorias[inputAdicionais]){
      Categorias[inputAdicionais] = [];
      fecharModal();
      atualizarCategorias();
    } else {
      alert("Essa categoria já existe!")
    }
  } else{
    alert("O nome da ctegoria não pode estar vazio!");
  }
}

function atualizarCategorias() {
    const categoriasDiv = document.getElementById("categorias");
    categoriasDiv.innerHTML = Object.keys(Categorias)
        .map(categoria => `
            <div class="categoria">
                <h1>${categoria}</h1>
                ${Categorias[categoria]
                    .map(item => `
                        <div class="produtos" onclick="popUp('${item.Nome}', '${item.Descricao}', '${item.Preco}', '${item.Imagem}')"> 
                            <div>
                                <h2 class="itemTitulo">${item.Nome}</h2>
                                <h3 class="descricao">${item.Descricao}</h3>
                                <h2 class="preco">${item.Preco}</h2>
                            </div>
                            <div class="divImg">
                                <img src="${item.Imagem}" />
                            </div>
                        </div>
                        <div class="btnsRemoveEEdit">
                            <button class="btnCardapio" onclick="removerItem('${categoria}', '${item.Nome}')">Remover</button>
                            <button class="btnCardapio" onclick="editarItem('${categoria}', '${item.Nome}', '${item.Descricao}', '${item.Preco}', '${item.Imagem}')">Editar</button>
                            <button class="btnCardapio" onclick="adicionarAdicionais('${item.Nome}')">Adicionar Adicionais</button>
                            <button class="btnCardapio" onclick="removerAdicionais()">Remover Adicionais</button>
                            <button class="btnCardapio" onclick="editarAdicionais()">Editar Adicionais</button>
                        </div>
                    `).join("")}
                    <div class="btnsModis">
                            <button class="btnCardapio" onclick="adicionarProduto('${categoria}')">Adicionar Produto</button>
                    </div>
            </div>
        `).join("");
}

function removerItem(categoria, nomeItem) {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "flex";
  modal.innerHTML = `
      <div class="popUpEdit">
          <div class="btnsInputs">
              <h1>Tem certeza que deseja remover "${nomeItem}"?</h1>
          </div>
          <div class="btnsSalvar">
              <button onclick="confirmarRemocao('${categoria}', '${nomeItem}')">Sim</button>
              <button onclick="fecharModal()">Não</button>
          </div>
      </div>
  `;
}

function confirmarRemocao(categoria, nomeItem){
  Categorias[categoria] = Categorias[categoria].filter(item => item.Nome !== nomeItem);
  atualizarCategorias();
  fecharModal();
}

document.addEventListener("DOMContentLoaded", criarModal);

function fecharModal(){
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "none";
}

function editarItem(categoria, nomeItem, descricaoItem, precoItem, imagemItem) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
        <div class="popUpEdit">
            <h1 class="titulo">Editar "${nomeItem}"</h1>
            <div class="btnsInputs">
                <label>Nome:</label>
                <input id="inputNovoNome" type="text" value="${nomeItem}" />
            </div>
            <div class="btnsInputs">
                <label>Descrição:</label>
                <textarea id="inputNovaDescricao" class="inputNovaDescricao">${descricaoItem}</textarea>
            </div>
            <div class="btnsInputs">
                <label>Preço:</label>
                <input id="inputNovoPreco" type="text" value="${precoItem}" />
            </div>
            <div class="btnsInputs">
                <label>Imagem Atual:</label>
                <img id="imagemPreview" src="${imagemItem}" class="imgPreview" />
                <label>Nova Imagem:</label>
                <input id="inputNovaImagem" type="file" accept="image/*" onchange="previewNovaImagem(event)" />
            </div>
            <div class="btnsSalvar">
                <button onclick="confirmarEdicao('${categoria}', '${nomeItem}')">Salvar</button>
                <button onclick="fecharModal()">Cancelar</button>
            </div>
        </div>
    `;
}

function previewNovaImagem(event){
  const file = event.target.files[0];
  if(file){
    const url = URL.createObjectURL(file);
    document.getElementById("imagemPreview").src = url;
  }
}

function confirmarEdicao(categoria, nomeItem) {
    const novoNome = document.getElementById("inputNovoNome").value.trim();
    const novaDescricao = document.getElementById("inputNovaDescricao").value.trim();
    const novoPreco = document.getElementById("inputNovoPreco").value.trim();
    const novaImagemInput = document.getElementById("inputNovaImagem").files[0];

    if (!novoNome || !novaDescricao || !novoPreco) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const item = Categorias[categoria].find(item => item.Nome === nomeItem);
    if (item) {
        item.Nome = novoNome;
        item.Descricao = novaDescricao;
        item.Preco = novoPreco;

        if (novaImagemInput) {
            const reader = new FileReader();
            reader.onload = function (e) {
                item.Imagem = e.target.result;
                atualizarCategorias();
                fecharModal();
            };
            reader.readAsDataURL(novaImagemInput);
        } else {
            atualizarCategorias();
            fecharModal();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarCategorias();
    criarModal();
});

function fecharModal() {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "none";
}

function popUp( nome, descricao, preco, imagem) {
    const popUps = document.querySelector(".popUps");
    popUps.innerHTML = "";

    const novaDiv = document.createElement("div");
    novaDiv.className = "popUp";

    novaDiv.innerHTML = `
    <div class="mainSamu">
      <div class="menuLanche">
        <div class="imagemLancheMenuLanche">
          <img
            src="${imagem}"
            alt="ImagemDoLanche"
            class="imagemLancheMenuLanche"
          />
        </div>
        <div class="nomeLancheMenuLanche">
          <h1 class="tituloLancheMenuLanche">${nome}</h1>
          <div class="descriçãoLanche">
            <p>
              ${descricao}
            </p>
            <div class="preçoLanche"><p>${preco}</p></div>
          </div>
        </div>
      </div>
      <div id="adicionaisPai" class="adicionaisPai">
        <div>
          <p class="adicionaisTurbinar">Turbine seu Burguer! <br />(escolha até 10 opções)</p>
          <div class="adicionaisMenuLanche">
          ${Adicionais.map(itemAdd => `
            <div class="adicionais">
              <img
                src="${itemAdd.Imagem}"
                alt="Batata"
              />
              <p>${itemAdd.Nome}</p>
              <p>${itemAdd.Preco}</p>
              <button onclick="AdicionarLanche('BatataMenuLancheFuncao')">adicionar</button>
            </div>
          `
        ).join("")}
          </div>
        </div>
      </div>
      <div id="finalizarCarrinhoMenuLanche">
      <p id="valorTotalMenuLanche">Valor Total: R$ <span id="ValorTotal">0,00</span></p>
      <button id="botaoFinalizarMenuLanche" onclick="AdicionarLanche('LancheMenuLancheFuncao')">Adicionar ao carrinho</button>
      <button id="botaoFinalizarMenuLanche"  onclick="fecharBtn()">Sair</button>
    </div>
    </div>
    `;
    popUps.appendChild(novaDiv);
    popUps.style.display = "flex";
}

function fecharBtn(){
    const popUps = document.querySelector(".popUps");
    popUps.style.display = "none"
}

function adicionarAdicionais(nomeItem) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div class="popUpEdit">
        <h1 class="titulo">Adicionar Adicional a "${nomeItem}"</h1>
        <div class="btnsInputs">
          <label>Nome:</label>
          <input id="inputAdicional" type="text" />
        </div>
        <div class="btnsInputs">
          <label>Valor:</label>
          <input id="inputAdicionalValor" type="text" />
        </div>
        <div class="btnsInputs">
          <label>Imagem:</label>
          <input id="inputAdicionalImagem" type="file" accept="image/*" onchange="previewNovaImagem(event)" />
       </div>
       <div class="btnsSalvar">
         <button onclick="salvarAdicional()">Salvar</button>
         <button onclick="fecharModal()">Cancelar</button>
       </div>
      </div>
    `;
}

function salvarAdicional() {
    const inputAdicional = document.getElementById("inputAdicional").value.trim();
    const inputAdicionalValor = document.getElementById("inputAdicionalValor").value.trim();
    const inputAdicionalImagem = document.getElementById("inputAdicionalImagem").files[0];

    if (!inputAdicional || !inputAdicionalValor) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const index = document.getElementById("selectAdicional")?.value;

    if (index !== undefined && index !== "") {
        Adicionais[index].Nome = inputAdicional;
        Adicionais[index].Preco = inputAdicionalValor;

        if (inputAdicionalImagem) {
            const reader = new FileReader();
            reader.onload = function (e) {
                Adicionais[index].Imagem = e.target.result;
                fecharModal();
            };
            reader.readAsDataURL(inputAdicionalImagem);
        } else {
            fecharModal();
        }
    } else {
        const reader = new FileReader();
        reader.onload = function (e) {
            const novaImagem = e.target.result;

            Adicionais.push({
                Nome: inputAdicional,
                Preco: inputAdicionalValor,
                Imagem: novaImagem,
            });

            fecharModal();
        };

        if (inputAdicionalImagem) {
            reader.readAsDataURL(inputAdicionalImagem);
        } else {
            Adicionais.push({
                Nome: inputAdicional,
                Preco: inputAdicionalValor,
                Imagem: "IMGS/default.png",
            });
            fecharModal();
        }
    }
}

function removerAdicionais() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div class="popUpEdit">
        <h1 class="titulo">Remover Adicional</h1>
        <div class="btnsInputs">
        ${Adicionais.map((itemAdd, index) => `
              <label>
                  <input type="checkbox" name="adicionalRemover" value="${index}" />
                  ${itemAdd.Nome} - ${itemAdd.Preco}
              </label>
            `).join("")}
        </div>
       <div class="btnsSalvar">
         <button onclick="confirmarRemocaoAdicional()">Remover</button>
         <button onclick="fecharModal()">Cancelar</button>
       </div>
      </div>
    `;
}

function confirmarRemocaoAdicional() {
    const selecionados = document.querySelectorAll("input[name='adicionalRemover']:checked");

    if (selecionados.length > 0) {
        const indicesParaRemover = Array.from(selecionados).map(input => parseInt(input.value)).sort((a, b) => b - a);
        
        indicesParaRemover.forEach(index => {
            Adicionais.splice(index, 1);
        });

        alert(`Foram removidos ${indicesParaRemover.length} adicionais!`);
        
        fecharModal();

        if(Adicionais.length === 0){
            document.getElementById("adicionaisPai").style.display = "none"
        }
    } else {
        alert("Selecione pelo menos um adicional para remover!");
    }
}

function editarAdicionais() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div class="popUpEdit">
        <h1 class="titulo">Editar Adicional</h1>
        <div class="btnsInputs">
            <label>Editar Adicional:</label>
            <select id="selectAdicional" onchange="preencherCamposAdicional()">
                <option value="" disabled selected>Selecione um adicional</option>
                ${Adicionais.map((itemEdit, index) => `
                    <option value="${index}">${itemEdit.Nome}</option>
                `).join("")}
            </select>
        </div>
        <div class="btnsInputs">
          <label>Nome:</label>
          <input id="inputAdicional" type="text" />
        </div>
        <div class="btnsInputs">
          <label>Valor:</label>
          <input id="inputAdicionalValor" type="text" />
        </div>
        <div class="btnsInputs">
          <label>Imagem:</label>
          <input id="inputAdicionalImagem" type="file" accept="image/*" onchange="previewNovaImagem(event)" />
        </div>
       <div class="btnsSalvar">
         <button onclick="salvarAdicional()">Salvar</button>
         <button onclick="fecharModal()">Cancelar</button>
       </div>
      </div>
    `;
}

function preencherCamposAdicional() {
    const select = document.getElementById("selectAdicional");
    const index = select.value;
    
    if (index !== "") {
        const adicional = Adicionais[index];
        document.getElementById("inputAdicional").value = adicional.Nome;
        document.getElementById("inputAdicionalValor").value = adicional.Preco;
    }
}

function adicionarProduto(categoria) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";
  
    modal.innerHTML = `
      <div class="popUpEdit">
        <h1>Adicionar Produto à Categoria "${categoria}"</h1>
        <div class="btnsInputs">
          <label>Nome do Produto:</label>
          <input id="inputNomeProduto" type="text" />
        </div>
        <div class="btnsInputs">
          <label>Descrição:</label>
          <textarea id="inputDescricaoProduto"></textarea>
        </div>
        <div class="btnsInputs">
          <label>Preço:</label>
          <input id="inputPrecoProduto" type="text" />
        </div>
        <div class="btnsInputs">
          <label>Imagem:</label>
          <input id="inputImagemProduto" type="file" accept="image/*" onchange="previewNovaImagem(event)" />
        </div>
        <div class="btnsSalvar">
          <button onclick="salvarProduto('${categoria}')">Salvar</button>
          <button onclick="fecharModal()">Cancelar</button>
        </div>
      </div>
    `;
  }
  
  function salvarProduto(categoria) {
    const nomeProduto = document.getElementById("inputNomeProduto").value.trim();
    const descricaoProduto = document.getElementById("inputDescricaoProduto").value.trim();
    const precoProduto = document.getElementById("inputPrecoProduto").value.trim();
    const imagemProduto = document.getElementById("inputImagemProduto").files[0];
  
    if (!nomeProduto || !descricaoProduto || !precoProduto) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }
  
    const novoProduto = {
      Nome: nomeProduto,
      Descricao: descricaoProduto,
      Preco: precoProduto,
      Imagem: imagemProduto ? URL.createObjectURL(imagemProduto) : "IMGS/default.png",
    };
  
    Categorias[categoria].push(novoProduto);
  
    atualizarCategorias();
  
    fecharModal();
  }
  
  function removerCate() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";
    modal.innerHTML = `
        <div class="popUpEdit">
            <div class="btnsInputs">
                <h1>Deseja excluir qual Categoria?</h1>
                <select id="selectCate" onchange="excluirSelecionadoCate()">
                    <option value="" disabled selected>Selecione uma Categoria</option>
                    ${Object.keys(Categorias).map(categoria => `
                        <option value="${categoria}">${categoria}</option>
                    `).join("")}
                </select>
            </div>
            <div class="btnsSalvar">
                <button onclick="confirmarRemocaoCate()">Sim</button>
                <button onclick="fecharModal()">Não</button>
            </div>
        </div>
    `;
}

function excluirSelecionadoCate() {
    const selectCate = document.getElementById("selectCate");
    const categoriaSelecionada = selectCate.value;
    if (categoriaSelecionada) {
        document.querySelector(".btnsSalvar button").disabled = false;
    }
}

function confirmarRemocaoCate() {
    const selectCate = document.getElementById("selectCate");
    const categoriaSelecionada = selectCate.value;

    if (categoriaSelecionada) {
        delete Categorias[categoriaSelecionada]; 
        atualizarCategorias(); 
        fecharModal(); 
    }
}

function editarCate() {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "flex";

  modal.innerHTML = `
    <div class="popUpEdit">
      <h1 class="titulo">Editar Categoria</h1>
      <div class="btnsInputs">
        <h1>Deseja editar qual Categoria?</h1>
        <select id="selectCateEdit" onchange="preencherInputEditCate()">
            <option value="" disabled selected>Selecione uma Categoria</option>
            ${Object.keys(Categorias).map(categoria => `
                <option value="${categoria}">${categoria}</option>
            `).join("")}
        </select>
      </div>
      <div class="btnsInputs">
        <label>Nome:</label>
        <input id="inputEditCate" type="text" />
      </div>
      <div class="btnsSalvar">
        <button onclick="salvarNovaCategoria()">Salvar</button>
        <button onclick="fecharModal()">Cancelar</button>
      </div>
    </div>
  `;
}

function preencherInputEditCate() {
  const selectCateEdit = document.getElementById("selectCateEdit");
  const categoriaSelecionadaEdit = selectCateEdit.value;

  if (categoriaSelecionadaEdit) {
    // Preenche o campo de entrada com o nome da categoria selecionada
    const inputEditCate = document.getElementById("inputEditCate");
    inputEditCate.value = categoriaSelecionadaEdit;  // Aqui preenche com o nome da categoria
    document.querySelector(".btnsSalvar button").disabled = false; // Habilita o botão "Salvar"
  }
}

function salvarNovaCategoria() {
  const selectCateEdit = document.getElementById("selectCateEdit");
  const categoriaSelecionadaEdit = selectCateEdit.value;
  const novoNomeCategoria = document.getElementById("inputEditCate").value.trim();

  if (categoriaSelecionadaEdit && novoNomeCategoria && categoriaSelecionadaEdit !== novoNomeCategoria) {
    // Criamos um array com a ordem original das categorias
    let categoriasOrdenadas = Object.keys(Categorias);

    // Criamos um novo objeto mantendo a ordem
    let novaListaCategorias = {};

    categoriasOrdenadas.forEach(categoria => {
      if (categoria === categoriaSelecionadaEdit) {
        // Renomeamos a categoria no mesmo local da lista
        novaListaCategorias[novoNomeCategoria] = Categorias[categoria];
      } else {
        novaListaCategorias[categoria] = Categorias[categoria];
      }
    });

    Categorias = novaListaCategorias;

    // Atualiza a interface
    atualizarCategorias();
    fecharModal();
  }
}

function voltarHome(){
  window.location.href = "/arielHome.html"
}