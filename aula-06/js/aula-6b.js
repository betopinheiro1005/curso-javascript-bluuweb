var conteudo = document.querySelector('#conteudo');

function trazer(){
    fetch('textos/texto1.txt')
    .then(data => data.text())
    .then (data => {
        console.log(data)
        conteudo.innerHTML = `${data}`
    })
}