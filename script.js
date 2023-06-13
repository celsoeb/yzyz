function play() {
  const numbers = [];
  const chosenNumbers = [];

  // Obt�m os n�meros escolhidos pelo usu�rio
  for (let i = 1; i <= 6; i++) {
    const input = document.getElementById('num' + i);
    const number = parseInt(input.value);
    if (number >= 1 && number <= 60) {
      chosenNumbers.push(number);
    }
  }

  // Gera 6 n�meros aleat�rios da Megasena
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  // Verifica quantos n�meros foram acertados
  const matchedNumbers = chosenNumbers.filter(number => numbers.includes(number));

  // Exibe o resultado
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'N�meros sorteados: ' + numbers.join(', ');
  resultElement.textContent += '\nN�meros acertados: ' + matchedNumbers.length;
}
