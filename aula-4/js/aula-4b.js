var saudacaoId = document.getElementById('saudacoes');
var somaId = document.getElementById('soma');

var saudar = nome => 'Olá ' + nome;
var somar = (num1, num2) => num1 + num2;

saudacaoId.innerHTML = saudar('Ignacio');
somaId.innerHTML += somar(18, 29);

