const Sessões = {
    Destaques: [
        {
            Nome: "COMBO FAMILIA : 2 Classic + 2 Mix + 1 Refrigerante 1,5L",
            Descricao: "Aproveite este combo com dois hambúrgueres Classic e dois Mix, acompanhado de um refrigerante de 1,5 litros para completar sua refeição! Perfeito para compartilhar com amigos e família.",
            Preco: "R$ 80,00",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FgvGEiOdReVw4lycHtukd_900x900.webp?alt=media&token=4c8eca87-503e-4844-af35-c11571fb9e23"
        },
        {
            Nome: "Combo 3: 4 Mix + 1 Refrigerante 1,5l",
            Descricao: "Quatro deliciosos hambúrgueres Mix com um refrigerante de 1,5 litros. Combinação perfeita para reunir a galera!",
            Preco: "R$ 73,00",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FgvGEiOdReVw4lycHtukd_900x900.webp?alt=media&token=4c8eca87-503e-4844-af35-c11571fb9e23"
        },
    ],
    Combo: [
        {
            Nome: "COMBO CASAL",
            Descricao: "2 hambúrguer top onion 200gramas de batata crocante 1 porção de anel de cebola e 2 coca cola lata.",
            Preco: "R$ 68,00",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FLUGWlenr9ACZhRV86ec1_900x900.webp?alt=media&token=7b4acc66-64f5-4bd0-86d5-bb82b0350f38"
        },
        {
            Nome: "Mix",
            Descricao: "Nosso clássico e irresistível Mix: Carne smash suculenta, queijo derretido e maionese da casa exclusiva, tudo servido em um pão brioche macio. Uma combinação perfeita de simplicidade e sabor que agrada a todos os paladares",
            Preco: "R$ 21,95",
            Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FsQOGG266owKD412TDneW_900x900.webp?alt=media&token=0482d83c-d900-454a-b486-98abb3eae5f9"
        },
    ]
}

const sessoes = document.getElementById("sessoes")

sessoes.innerHTML = Object.keys(Sessões)
    .map(sessoes => `
        <h1 class="titulosCardapio">${sessoes}</h1>
        <div class="sessoes">
           ${Sessões[sessoes]
               .map(produtos => `
                       <div class="produtos" onclick="popUp('${produtos.Nome}', '${produtos.Descricao}', '${produtos.Preco},' '${produtos.Imagem}')">
                           <div class="info">
                               <h2 class="tituloPro">${produtos.Nome}</h2>
                               <h2 class="descricao">${produtos.Descricao}</h2>
                               <h2 class="preco">${produtos.Preco}</h2>
                           </div>
                           <div>
                           <img class="imagemP" src="${produtos.Imagem}" />
                           </div>
                       </div>
                   `)
                    .join("")}
        </div>
        `)
        .join("")