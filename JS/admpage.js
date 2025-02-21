document.addEventListener("DOMContentLoaded", function () {
  var vendastab = document.getElementById("vendas");
  var funcionariostab = document.getElementById("funcionarios");
  var estoqueTab = document.getElementById("estoque");
  var pedidosTab = document.getElementById("pedidos");
  // var sugestoesTab = document.getElementById("sugestoes");
  // var avaliacoesTab = document.getElementById("avaliacoes");

  var voltarIndex = document.getElementById("voltarIndex");
  var local = document.getElementById("local");
  var voltarHome = document.getElementById("voltarHome");

  var mainCaixaBranca = document.getElementById("mainCaixaBranca");

  voltarIndex.addEventListener("click", function () {
    return (window.location.href = "./arielHome.html");
  });

  function loadVendas() {
    local.innerHTML = `<i class="bi bi-cart"></i> Vendas`;
    mainCaixaBranca.innerHTML = `
<div class="tabelas">
        <div class="infoUsuario">
          <h2>Relatório de Vendas - Fevereiro 2025</h2>
          <div class="tabelaInfo">
            <table>
              <tr>
                <th>Data</th>
                <th>Vendas Feitas</th>
                <th>Faturamento</th>
                <th>Gastos</th>
                <th>Lucro</th>
              </tr>
              <tr>
                <td>01/02/2025</td>
                <td>150</td>
                <td>R$ 7.500,00</td>
                <td>R$ 3.000,00</td>
                <td>R$ 4.500,00</td>
              </tr>
              <tr>
                <td>02/02/2025</td>
                <td>200</td>
                <td>R$ 10.000,00</td>
                <td>R$ 4.000,00</td>
                <td>R$ 6.000,00</td>
              </tr>
              <tr>
                <td>03/02/2025</td>
                <td>180</td>
                <td>R$ 9.000,00</td>
                <td>R$ 3.600,00</td>
                <td>R$ 5.400,00</td>
              </tr>
              <tr>
                <td>04/02/2025</td>
                <td>220</td>
                <td>R$ 11.000,00</td>
                <td>R$ 4.400,00</td>
                <td>R$ 6.600,00</td>
              </tr>
              <tr>
                <td>05/02/2025</td>
                <td>170</td>
                <td>R$ 8.500,00</td>
                <td>R$ 3.400,00</td>
                <td>R$ 5.100,00</td>
              </tr>
              <tr>
                <td>06/02/2025</td>
                <td>190</td>
                <td>R$ 9.500,00</td>
                <td>R$ 3.800,00</td>
                <td>R$ 5.700,00</td>
              </tr>
              <tr>
                <td>07/02/2025</td>
                <td>210</td>
                <td>R$ 10.500,00</td>
                <td>R$ 4.200,00</td>
                <td>R$ 6.300,00</td>
              </tr>
              <tr>
                <td>08/02/2025</td>
                <td>160</td>
                <td>R$ 8.000,00</td>
                <td>R$ 3.200,00</td>
                <td>R$ 4.800,00</td>
              </tr>
              <tr>
                <td>09/02/2025</td>
                <td>230</td>
                <td>R$ 11.500,00</td>
                <td>R$ 4.600,00</td>
                <td>R$ 6.900,00</td>
              </tr>
              <tr>
                <td>10/02/2025</td>
                <td>240</td>
                <td>R$ 12.000,00</td>
                <td>R$ 4.800,00</td>
                <td>R$ 7.200,00</td>
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
    loadVendas();
  });

  vendastab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-cart"></i> Vendas`;
    mainCaixaBranca.innerHTML = `
    <div class="tabelas">
        <div class="infoUsuario">
          <h2>Relatório de Vendas - Fevereiro 2025</h2>
          <div class="tabelaInfo">
            <table>
              <tr>
                <th>Data</th>
                <th>Vendas Feitas</th>
                <th>Faturamento</th>
                <th>Gastos</th>
                <th>Lucro</th>
              </tr>
              <tr>
                <td>01/02/2025</td>
                <td>150</td>
                <td>R$ 7.500,00</td>
                <td>R$ 3.000,00</td>
                <td>R$ 4.500,00</td>
              </tr>
              <tr>
                <td>02/02/2025</td>
                <td>200</td>
                <td>R$ 10.000,00</td>
                <td>R$ 4.000,00</td>
                <td>R$ 6.000,00</td>
              </tr>
              <tr>
                <td>03/02/2025</td>
                <td>180</td>
                <td>R$ 9.000,00</td>
                <td>R$ 3.600,00</td>
                <td>R$ 5.400,00</td>
              </tr>
              <tr>
                <td>04/02/2025</td>
                <td>220</td>
                <td>R$ 11.000,00</td>
                <td>R$ 4.400,00</td>
                <td>R$ 6.600,00</td>
              </tr>
              <tr>
                <td>05/02/2025</td>
                <td>170</td>
                <td>R$ 8.500,00</td>
                <td>R$ 3.400,00</td>
                <td>R$ 5.100,00</td>
              </tr>
              <tr>
                <td>06/02/2025</td>
                <td>190</td>
                <td>R$ 9.500,00</td>
                <td>R$ 3.800,00</td>
                <td>R$ 5.700,00</td>
              </tr>
              <tr>
                <td>07/02/2025</td>
                <td>210</td>
                <td>R$ 10.500,00</td>
                <td>R$ 4.200,00</td>
                <td>R$ 6.300,00</td>
              </tr>
              <tr>
                <td>08/02/2025</td>
                <td>160</td>
                <td>R$ 8.000,00</td>
                <td>R$ 3.200,00</td>
                <td>R$ 4.800,00</td>
              </tr>
              <tr>
                <td>09/02/2025</td>
                <td>230</td>
                <td>R$ 11.500,00</td>
                <td>R$ 4.600,00</td>
                <td>R$ 6.900,00</td>
              </tr>
              <tr>
                <td>10/02/2025</td>
                <td>240</td>
                <td>R$ 12.000,00</td>
                <td>R$ 4.800,00</td>
                <td>R$ 7.200,00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>`;
    document
      .getElementById("btnSalvarPerfil")
      .addEventListener("click", SalvarPerfil);
  });

  funcionariostab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-person-vcard"></i> Funcionários`;
    mainCaixaBranca.innerHTML = `
   <div class="tabelas">
        <div class="infoUsuario">
          <h2>Funcionários</h2>
          <div class="tabelaInfo">
            <table>
              <tr>
                <th>Nome</th>
                <th>Contato</th>
                <th>Data da Contratação</th>
                <th>Função</th>
                <th>Salário</th>
              </tr>
              <tr>
                <td>Maria Oliveira</td>
                <td>(11) 91234-5678</td>
                <td>01/01/2023</td>
                <td>Gerente</td>
                <td>R$ 5.000,00</td>
              </tr>
              <tr>
                <td>João Silva</td>
                <td>(11) 98765-4321</td>
                <td>15/03/2023</td>
                <td>Atendente</td>
                <td>R$ 2.500,00</td>
              </tr>
              <tr>
                <td>Carlos Pereira</td>
                <td>(11) 99876-5432</td>
                <td>20/06/2023</td>
                <td>Cozinheiro</td>
                <td>R$ 3.000,00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>`;
    document
      .getElementById("btnSalvarPerfil")
      .addEventListener("click", SalvarPerfil);
  });

  estoqueTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-box2"></i> Estoque`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
        <div class="infoUsuario">
          <h2>Estoque</h2>
          <div class="tabelaInfo">
            <table>
              <tr>
                <th>Nome do Produto</th>
                <th>Quantidade</th>
                <th>Data da Compra</th>
                <th>Data de Validade</th>
              </tr>
              <tr>
                <td>Hambúrguer de Carne</td>
                <td>50</td>
                <td>01/01/2025</td>
                <td>01/03/2025</td>
              </tr>
              <tr>
                <td>Pão de Hambúrguer</td>
                <td>100</td>
                <td>01/01/2025</td>
                <td>15/02/2025</td>
              </tr>
              <tr>
                <td>Queijo Cheddar</td>
                <td>80</td>
                <td>01/01/2025</td>
                <td>01/04/2025</td>
              </tr>
              <tr>
                <td>Alface</td>
                <td>30</td>
                <td>01/01/2025</td>
                <td>10/01/2025</td>
              </tr>
              <tr>
                <td>Tomate</td>
                <td>40</td>
                <td>01/01/2025</td>
                <td>10/01/2025</td>
              </tr>
              <tr>
                <td>Molho Especial</td>
                <td>20</td>
                <td>01/01/2025</td>
                <td>01/06/2025</td>
              </tr>
              <tr>
                <td>Batata Frita</td>
                <td>60</td>
                <td>01/01/2025</td>
                <td>01/05/2025</td>
              </tr>
              <tr>
                <td>Refrigerante</td>
                <td>200</td>
                <td>01/01/2025</td>
                <td>01/12/2025</td>
              </tr>
              <tr>
                <td>Água Mineral</td>
                <td>150</td>
                <td>01/01/2025</td>
                <td>01/12/2025</td>
              </tr>
              <tr>
                <td>Sorvete</td>
                <td>30</td>
                <td>01/01/2025</td>
                <td>01/07/2025</td>
              </tr>
            </table>
          </div>
        </div>
      </div>`;
    document
      .getElementById("btnSalvarPerfil")
      .addEventListener("click", SalvarPerfil);
  });
  pedidosTab.addEventListener("click", function () {
    local.innerHTML = `<i class="bi bi-cart"></i>Pedidos`;
    mainCaixaBranca.innerHTML = `
          <div class="tabelas">
        <div class="infoUsuario">
          <h2>Pedidos Concluídos</h2>
          <div class="tabelaInfo">
            <table>
              <tr>
                <th>Pedido</th>
                <th>Data</th>
                <th>Status</th>
                <th>Valor</th>
              </tr>
              <tr>
                <td>#12345</td>
                <td>01/01/2025</td>
                <td class="concluido">CONCLUÍDO</td>
                <td>R$ 180,00</td>
              </tr>
              <tr>
                <td>#12344</td>
                <td>31/12/2024</td>
                <td class="concluido">CONCLUÍDO</td>
                <td>R$ 200,00</td>
              </tr>
              <tr>
                <td>#12343</td>
                <td>31/12/2024</td>
                <td class="concluido">CONCLUÍDO</td>
                <td>R$ 290,00</td>
              </tr>
              <tr>
                <td>#12342</td>
                <td>31/12/2024</td>
                <td class="concluido">CONCLUÍDO</td>
                <td>R$ 600,00</td>
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
                <th>Data</th>
                <th>Status</th>
                <th>Valor</th>
              </tr>
              <tr>
                <td>#12348</td>
                <td>02/01/2025</td>
                <td class="cancelado">CANCELADO</td>
                <td>R$ 80,00</td>
              </tr>
              <tr>
                <td>#12347</td>
                <td>02/01/2025</td>
                <td class="cancelado">CANCELADO</td>
                <td>R$ 240,00</td>
              </tr>
              <tr>
                <td>#12346</td>
                <td>01/01/2025</td>
                <td class="cancelado">CANCELADO</td>
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
                <th>Data</th>
                <th>Status</th>
                <th>Valor</th>
              </tr>
              <tr>
                <td>#12349</td>
                <td>03/01/2025</td>
                <td class="andamento">EM ANDAMENTO</td>
                <td>R$ 250,00</td>
              </tr>
              <tr>
                <td>#12350</td>
                <td>03/01/2025</td>
                <td class="andamento">EM ANDAMENTO</td>
                <td>R$ 130,00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>`;
    document
      .getElementById("btnSalvarPerfil")
      .addEventListener("click", SalvarPerfil);
  });

//   sugestoesTab.addEventListener("click", function () {
//     local.innerHTML = `<i class="bi bi-chat-left"></i> Sugestões`;
//     mainCaixaBranca.innerHTML = `
//           <div class="tabelas">
//   <div class="infoUsuario">
//     <h2>Sugestões</h2>
//     <div class="tabelaInfo">
//       <table>
//         <tr>
//           <th>Usuário</th>
//           <td>João Silva</td>
//         </tr>
//         <tr>
//           <th>Data</th>
//           <td>01/01/2025</td>
//         </tr>
//         <tr>
//           <th>Sugestão</th>
//           <td>Adicionar mais opções vegetarianas no cardápio.</td>
//         </tr>
//         <tr>
//           <th>Status</th>
//           <td>Recebida</td>
//         </tr>
//         <tr>
//           <th>Aprovação</th>
//           <td>Não</td>
//         </tr>
//       </table>
//     </div>
//   </div>
//   <div class="infoUsuario">
//     <h2>Sugestões</h2>
//     <div class="tabelaInfo">
//       <table>
//         <tr>
//           <th>Usuário</th>
//           <td>Maria Oliveira</td>
//         </tr>
//         <tr>
//           <th>Data</th>
//           <td>15/02/2024</td>
//         </tr>
//         <tr>
//           <th>Sugestão</th>
//           <td>Oferecer descontos para clientes frequentes.</td>
//         </tr>
//         <tr>
//           <th>Status</th>
//           <td>Aprovada</td>
//         </tr>
//         <tr>
//           <th>Aprovação</th>
//           <td>Sim</td>
//         </tr>
//       </table>
//     </div>
//   </div>
//   <div class="infoUsuario">
//     <h2>Sugestões</h2>
//     <div class="tabelaInfo">
//       <table>
//         <tr>
//           <th>Usuário</th>
//           <td>Carlos Pereira</td>
//         </tr>
//         <tr>
//           <th>Data</th>
//           <td>28/03/2024</td>
//         </tr>
//         <tr>
//           <th>Sugestão</th>
//           <td>Implementar um programa de fidelidade.</td>
//         </tr>
//         <tr>
//           <th>Status</th>
//           <td>Em Análise</td>
//         </tr>
//         <tr>
//           <th>Aprovação</th>
//           <td>Não</td>
//         </tr>
//       </table>
//     </div>
//   </div>
// </div>`;
//     document
//       .getElementById("btnSalvarPerfil")
//       .addEventListener("click", SalvarPerfil);
//   });

//   avaliacoesTab.addEventListener("click", function () {
//     local.innerHTML = `<i class="bi bi-star"></i> Avaliacoes`;
//     mainCaixaBranca.innerHTML = `
//           <div class="tabelas">
//   <div class="infoUsuario">
//     <h2>Avaliações</h2>
//     <div class="tabelaInfo">
//       <table>
//         <tr>
//           <th>Usuário</th>
//           <td>João Silva</td>
//         </tr>
//         <tr>
//           <th>Estrelas</th>
//           <td>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//           </td>
//         </tr>
//         <tr>
//           <th>Mensagem</th>
//           <td>Ótimo atendimento e comida deliciosa!</td>
//         </tr>
//       </table>
//     </div>
//   </div>
//   <div class="infoUsuario">
//     <h2>Avaliações</h2>
//     <div class="tabelaInfo">
//       <table>
//         <tr>
//           <th>Usuário</th>
//           <td>Maria Oliveira</td>
//         </tr>
//         <tr>
//           <th>Estrelas</th>
//           <td>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star"></i>
//           </td>
//         </tr>
//         <tr>
//           <th>Mensagem</th>
//           <td>Boa comida, mas o atendimento poderia ser mais rápido.</td>
//         </tr>
//       </table>
//     </div>
//   </div>
//   <div class="infoUsuario">
//     <h2>Avaliações</h2>
//     <div class="tabelaInfo">
//       <table>
//         <tr>
//           <th>Usuário</th>
//           <td>Carlos Pereira</td>
//         </tr>
//         <tr>
//           <th>Estrelas</th>
//           <td>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star-fill"></i>
//             <i class="bi bi-star"></i>
//             <i class="bi bi-star"></i>
//           </td>
//         </tr>
//         <tr>
//           <th>Mensagem</th>
//           <td>A comida é boa, mas o ambiente estava muito barulhento.</td>
//         </tr>
//       </table>
//     </div>
//   </div>
// </div>`;
//     document
//       .getElementById("btnSalvarPerfil")
//       .addEventListener("click", SalvarPerfil);
//   });

  loadVendas();
});
