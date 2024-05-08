 // Função para realizar a conversão
 function converter() {
  // Obter valor inserido pelo usuário
  const valorEmDolar = parseFloat(document.getElementById('valor').value);
  // Verificar se o valor é válido
  //Caso não sera exibido um alert falando invalido
  if (isNaN(valorEmDolar) || valorEmDolar <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }
  // Calcular o valor convertido para Real
  const valorEmReal = valorEmDolar * 5.09;
  // Exibir o resultado da conversão
  document.getElementById('resultado').innerText = `Valor em Real (BRL): R$${valorEmReal.toFixed(2)}`;
}
