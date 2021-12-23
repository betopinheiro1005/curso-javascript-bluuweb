// console.log('Funcionando!');

var formulario = document.getElementById('formulario');
var resposta = document.getElementById('resposta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('O botão foi clicado!');

    var dados = new FormData(formulario);
    console.log(dados);
    console.log(dados.get('usuario'));
    console.log(dados.get('senha'));

    fetch('post.php',{
        method: 'POST',
        body: dados
    })
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        if(data === 'error'){
            resposta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Preencha todos os campos!
            </div>
            `
        } else {
            resposta.innerHTML = `
            <div class="alert alert-primary" role="alert">
                ${data}
            </div>
            `
        }
    })

});