class Pessoa {
    nome: String;
    altura: Number;

    constructor(nome: String, altura: Number){
        this.nome = nome;
        this.altura = altura;
    }
}

const pessoa = new Pessoa("Flavio", 177);

console.log(pessoa);