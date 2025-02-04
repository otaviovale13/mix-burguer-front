const Categorias = {
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
                        <div class="btnsModis">
                          <button class="btnCardapio">Adicionar</button>
                        </div>
            </div>
        `)
        .join("")

        function buscarLanche(){
            const inputBuscar = document.getElementById("inputBuscar").value.toLowerCase()
            const categorias = document.querySelectorAll(".categoria")

            categorias.forEach(categoria => {
                const produtos = categoria.querySelectorAll(".produtos");
                let visibilidade = false;

                produtos.forEach(item => {
                    if(item.textContent.toLowerCase().includes(inputBuscar)){
                        item.style.display = "";
                        visibilidade = true;
                    } else{
                        item.style.display = "none";
                    }
                });

                categoria.style.display = visibilidade ? "" : "none";
            });
        }

        function adicionarCate() {
          const modal = document.getElementById("popUpsAdicionar");
          modal.style.display = "flex"; // Exibe o modal
      }
      
      // Criar modal dinamicamente
function criarModal() {
  const modal = document.createElement("div");
  modal.id = "popUpsAdicionar";
  modal.className = "popUpsAdicionar";
  modal.style.display = "none"; // Inicialmente oculto

  modal.innerHTML = `
    <div class="popUp">
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

  document.body.appendChild(modal);
}

// Salvar categoria
function salvarCategoria() {
  const inputAdicionais = document.getElementById("inputAdicionais").value.trim();

  if (inputAdicionais !== "") {
      if (!Categorias[inputAdicionais]) {
          Categorias[inputAdicionais] = []; // Criar nova categoria
          console.log("Categoria adicionada:", inputAdicionais);
          fecharModal();
          atualizarCategorias(); // Atualiza a interface
      } else {
          alert("Essa categoria já existe!");
      }
  } else {
      alert("O nome da categoria não pode estar vazio!");
  }
}

// Função para atualizar a exibição das categorias
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
                            <button class="btnCardapio" onclick="editarItem('${categoria}', '${item.Nome}')">Editar</button>
                            <button class="btnCardapio" onclick="adicionarAdicionais('${categoria}', '${item.Nome}')">Adicionar Adicionais</button>
                            <button class="btnCardapio" onclick="removerAdicionais('${categoria}', '${item.Nome}')">Remover Adicionais</button>
                            <button class="btnCardapio" onclick="editarAdicionais('${categoria}', '${item.Nome}')">Editar Adicionais</button>
                        </div>
                    `).join("")}
            </div>
        `).join("");
}

// Função para remover um item (abre o modal de confirmação)
function removerItem(categoria, nomeItem) {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "flex"; // Exibe o modal
  modal.innerHTML = `
      <div class="popUp">
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

// Função para confirmar remoção
function confirmarRemocao(categoria, nomeItem) {
  Categorias[categoria] = Categorias[categoria].filter(item => item.Nome !== nomeItem);
  atualizarCategorias();
  fecharModal();
}

// Criar o modal assim que a página carregar
document.addEventListener("DOMContentLoaded", criarModal);

// Fechar modal
function fecharModal() {
const modal = document.getElementById("popUpsAdicionar");
modal.style.display = "none";
}

// Função para editar um item (abre um modal para editar o nome do item)
function editarItem(categoria, nomeItem) {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "flex"; // Exibe o modal
  modal.innerHTML = `
      <div class="popUp">
          <div class="btnsInputs">
              <h1>Editar o item "${nomeItem}"?</h1>
          </div>
          <div class="btnsInputs">
              <label>Novo Nome:</label>
              <input id="inputNovoNome" type="text" value="${nomeItem}" />
          </div>
          <div class="btnsSalvar">
              <button onclick="confirmarEdição('${categoria}', '${nomeItem}')">Editar</button>
              <button onclick="fecharModal()">Fechar</button>
          </div>
      </div>
  `;
}

// Função para confirmar a edição de um item
function confirmarEdição(categoria, nomeItem) {
  const novoNome = document.getElementById("inputNovoNome").value.trim();

  if (novoNome !== "") {
    // Atualiza o nome do item na estrutura Categorias
    const item = Categorias[categoria].find(item => item.Nome === nomeItem);
    if (item) {
      item.Nome = novoNome;
      console.log(`Item "${nomeItem}" editado para "${novoNome}"`);
    }
    atualizarCategorias(); // Atualiza a exibição na página
    fecharModal(); // Fecha o modal
  } else {
    alert("O nome do item não pode estar vazio!");
  }
}


// Criar modal assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    atualizarCategorias();
    criarModal();
});

// Fechar modal
function fecharModal() {
  const modal = document.getElementById("popUpsAdicionar");
  modal.style.display = "none";
}
