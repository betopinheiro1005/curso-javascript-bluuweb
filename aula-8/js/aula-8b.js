var conteudo = document.querySelector('#conteudo');

function trazer(){
    fetch('dados/tabela1.json')
    .then(res => res.json())
    .then (dados => {
        tabela(dados)
    })
}

function tabela(dados){
    // console.log(dados);
    conteudo.innerHTML = '';
    for(let valor of dados){
        // console.log(valor);
        conteudo.innerHTML += `
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.nome }</td>
            <td>${ valor.email }</td>
            <td>${ valor.status ? "Ativo" : "Eliminado" }</td>
        </tr>

        `
    }
}

