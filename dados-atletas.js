class Atleta{
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // para calcular a categoria do atleta;
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    //para calcular o IMC do atleta;
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    } 

    //para calcular a média válida do atleta.
    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort(function(a, b) {
            return a - b;
        });

        let notasComputadas = notasOrdenadas.slice(1, 4);

        let soma = notasComputadas.reduce(function(total, nota) {
            return total + nota;
        }, 0);

        let media = soma / notasComputadas.length;

        return media;
    }  

    //que retorna o nome do atleta
    obtemNomeAtleta() {
        return this.nome;
    }  

    //que retorna a idade do atleta
    obtemIdadeAtleta() {
        return this.idade;
    }  

    //que retorna o peso do atleta
    obtemPesoAtleta() {
        return this.peso;
    } 

    //que retorna a altura do atleta
    obtemAlturaAtleta() {
        return this.altura;
    }

    //que retorna as notas do atleta
    obtemNotasAtleta() {
        return this.notas;
    } 
    
    //que retorna a categoria do atleta
    obtemCategoria() {
        return this.calculaCategoria();
    }  

    //que retorna o IMC do atleta
    obtemIMC() {
        return this.calculaIMC();
    }  

    //que retorna a média válida do atleta
    obtemMediaValida() {
        return this.calculaMediaValida();
    }  
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média Válida: " + atleta.obtemMediaValida());