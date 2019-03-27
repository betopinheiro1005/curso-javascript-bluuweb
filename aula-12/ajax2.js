console.log('Correto!');

document.querySelector('#botao').addEventListener('click', trazerDados);

function trazerDados(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let dados = JSON.parse(this.responseText);
            console.log(dados);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of dados){
                // console.log(item.artista);
                res.innerHTML += `
                <tr>
                    <td>${item.titulo}</td>
                    <td>${item.artista}</td>
                </tr>
                
                `
            }
            
        }
    };
    xhttp.open("GET", "catalogo.json", true);
    xhttp.send();
}
