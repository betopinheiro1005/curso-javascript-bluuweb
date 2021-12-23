var conteudo = document.querySelector('#conteudo');

function trazer(){
    fetch('dados/tabela1.json')
    .then(res => res.json())
    .then (dados => {
        console.log(dados)
    })
}