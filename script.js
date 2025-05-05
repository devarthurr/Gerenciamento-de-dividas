document.getElementById('recebimento-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const cliente = document.getElementById('cliente').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const forma = document.getElementById('forma').value;
  
    const taxaCartao = 0.029;
    let valorFinal = valor;
  
    if (forma === 'Cartão') {
      valorFinal = valor - (valor * taxaCartao);
    }
  
    const tabela = document.getElementById('tabela-recebimentos');
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${cliente}</td>
      <td>R$ ${valor.toFixed(2)}</td>
      <td>${data}</td>
      <td>${forma}</td>
      <td>R$ ${valorFinal.toFixed(2)}</td>
      <td><button class="quitar-btn">Quitar</button></td>
    `;
  
    // Adiciona a função ao botão de "Quitar"
    row.querySelector('.quitar-btn').addEventListener('click', function () {
      if (confirm(`Deseja quitar a dívida de ${cliente}?`)) {
        tabela.removeChild(row);
      }
    });
  
    tabela.appendChild(row);
  
    // Limpar formulário
    document.getElementById('recebimento-form').reset();
  });
  
