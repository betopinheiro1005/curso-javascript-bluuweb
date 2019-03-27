console.log('Ativo');

document.querySelector('#botao').addEventListener('click', trazerDados);

function trazerDados(){
    // console.log('Função ativada!');

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            document.querySelector('#resposta').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "arquivo.txt", true);
    xhttp.send();

}
