/* Variáveis globais */

const addBotoes = document.querySelector('#addBotoes');
const botoes = document.querySelector('#botoes');
const fundo = document.querySelector('#fundo');

(() => {
    addBotoes.addEventListener('click', adicionarBotoes);
    botoes.addEventListener('click', delegation);

})()

function delegation(e){
    e.preventDefault();
    // console.log('Você clicou no container!');
    // console.log(e.target.classList[1]);
    const colorButton = e.target.classList[1];
    switch(colorButton){
        case ('btn-primary'):
            fundo.className = 'bg-primary';
            break;
        case ('btn-secondary'):
            fundo.className = 'bg-secondary';
            break;
        case ('btn-success'):
            fundo.className = 'bg-success';
            break;
        case ('btn-danger'):
            fundo.className = 'bg-danger';
            break;
        case ('btn-warning'):
            fundo.className = 'bg-warning';
            break;
        case ('btn-info'):
            fundo.className = 'bg-info';
            break;

    }
}

function adicionarBotoes(e){
    e.preventDefault();
    console.log('Você clicou no botão preto!');
    botoes.innerHTML = `<button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>`;

}
