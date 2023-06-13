function play() {
  const numbers = [];
  const chosenNumbers = [];

  // Obtém os números escolhidos pelo usuário
  for (let i = 1; i <= 6; i++) {
    const input = document.getElementById('num' + i);
    const number = parseInt(input.value);
    if (number >= 1 && number <= 60) {
      chosenNumbers.push(number);
    }
  }

  // Gera 6 números aleatórios da Megasena
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  // Verifica quantos números foram acertados
  const matchedNumbers = chosenNumbers.filter(number => numbers.includes(number));

  // Exibe o resultado
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'Números sorteados: ' + numbers.join(', ');
  resultElement.textContent += '\nNúmeros acertados: ' + matchedNumbers.length;
}
