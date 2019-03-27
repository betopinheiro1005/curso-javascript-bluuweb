const produtos = [
    {nome: 'banana', valor: 1.50},
    {nome: 'pera', valor: 2.50},
    {nome: 'melancia', valor: 12.50},
    {nome: 'melão', valor: 4.50},
    {nome: 'morango', valor: 3.50},
    {nome: 'maçã', valor: 2.00},
    {nome: 'abacaxi', valor: 5.00},
    {nome: 'uva', valor: 4.00},
    {nome: 'laranja', valor: 2.80},
    {nome: 'limão', valor: 0.60},
];
const formulario = document.querySelector('#formulario');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    // console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for(let produto of produtos){
        let nome = produto.nome.toLowerCase();
        if(nome.indexOf(texto) !== -1){
            resultado.innerHTML += `<li>${produto.nome} - Valor: ${produto.valor}</li>`
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Produto não encontrado!</li>`; 
    }
}

botao.addEventListener('click',filtrar);
formulario.addEventListener('keyup', filtrar);

filtrar();