var titulo1 = document.getElementById('titulo');

console.log(titulo1.innerHTML);

titulo1.innerHTML = "Lorem Ipsum";

titulo1.style.color = "blue";
titulo1.style.background = "yellow";
titulo1.style.textAlign = "center";

var p1 = document.getElementById('paragrafo1');
var bt1 = document.getElementById('botao');

function alterar_cor(){
    p1.style.color = "red";
}

bt1.onclick = alterar_cor;


