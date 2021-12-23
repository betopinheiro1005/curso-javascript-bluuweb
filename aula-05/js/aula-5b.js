var objeto = {
    nome: 'HTML',
    duracao: 15,
    status: true,
    capitulos: {
        nome: 'introdução',
        videos: 20
    }
}

console.log(objeto);

console.log('Nome: ', objeto['nome']);
console.log('Duração: ', objeto['duracao']);
console.log('Status: ', objeto['status']);

console.log('Nome: ', objeto.nome);
console.log('Duração: ', objeto.duracao);
console.log('Status: ', objeto.status);

console.log('Nome do capítulo: ', objeto.capitulos.nome);