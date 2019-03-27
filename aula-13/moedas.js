document.querySelector('#dolar').addEventListener('click', function(){
    obterDados('dolar');
});

document.querySelector('#uf').addEventListener('click', function(){
    obterDados('uf');
});

function obterDados(valor){
    console.log('Clicado!');

    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();
    api.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let dados = JSON.parse(this.responseText);
            console.log(dados.serie);

            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            let i = 0;

            for(let item of dados.serie){
                // console.log(item.fecha);
                resultado.innerHTML += `<li>${item.fecha.substr(0,10)} | $ ${item.valor}</li>`
                i++;
                if(i>10){
                    break;
                }
            }
        }
    };
    
    api.open("GET", url, true);
    api.send();
}
