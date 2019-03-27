const Filme1 = {
    nome: 'Harry',
    id: 1,
    reproduzir(){
        return `Reproduzindo o filme... ${this.nome}`;
    }
}

class Filme{
    constructor(nome, id){
        this.nome = nome;
        this.id = id;
    }
    reproduzir(){
        return `Reproduzindo o filme... ${this.nome}`;
    }
}

class Serie extends Filme{
    constructor(nome, id, cap){
        super(nome, id);
        this.cap = cap;
    }
    reproduzirCapitulo(){
        return `Reproduzindo capítulo ${this.cap}... ${this.nome}`;
    }
}


const filme1 = new Filme('Harry', 1);
const filme2 = new Filme('Aranha', 2);
const serie1 = new Serie('Dexter', 3, 55);

// console.log(filme1);
// console.log(filme2);

console.log(filme1.reproduzir());
console.log(filme2.reproduzir());
console.log(serie1.reproduzirCapitulo());
