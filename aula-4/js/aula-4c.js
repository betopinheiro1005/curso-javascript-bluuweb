var saudacaoId = document.getElementById('saudacoes');
var somaId = document.getElementById('soma');

var saudar = nome => 'Olá ' + nome;
var somar = (num1, num2) => {
    var num3 = 15;
    return num1 + num2 + num3;
}

saudacaoId.innerHTML = saudar('Ignacio');
somaId.innerHTML += somar(18, 29);

