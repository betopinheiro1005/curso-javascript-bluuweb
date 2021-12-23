var conteudo = document.querySelector('#conteudo');

function trazer(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then (data => {
        console.log(data.results['0'])
        conteudo.innerHTML = `
            <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
            <p>Nome: ${data.results['0'].name.first} ${data.results['0'].name.last}</p>
            `
    })
}