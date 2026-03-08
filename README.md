# Projeto: Dados de Atletas

## Descrição

Este projeto foi desenvolvido em JavaScript com o objetivo de criar uma aplicação capaz de receber informações de um atleta, calcular alguns parâmetros e exibir os resultados ao usuário.

A aplicação utiliza programação orientada a objetos por meio de uma classe chamada `Atleta`, responsável por concentrar os atributos e métodos relacionados aos atletas participantes de uma competição.

O sistema recebe dados como nome, idade, peso, altura e notas do atleta, e a partir dessas informações calcula a categoria do atleta, o índice de massa corporal (IMC) e a média válida das notas.

---

## Estrutura da Classe

A classe `Atleta` recebe os seguintes atributos:

* **nome**: nome do atleta
* **idade**: idade do atleta
* **peso**: peso do atleta em quilogramas
* **altura**: altura do atleta em metros
* **notas**: lista com cinco notas atribuídas por jurados

---

## Métodos da Classe

A classe possui os seguintes métodos:

### Métodos de cálculo

* **calculaCategoria()**
  Determina a categoria do atleta com base na idade.

* **calculaIMC()**
  Calcula o Índice de Massa Corporal utilizando a fórmula:

```
IMC = peso / (altura × altura)
```

* **calculaMediaValida()**
  Calcula a média válida das notas do atleta.
  A maior e a menor nota são descartadas, e a média é calculada com as três notas restantes.

### Métodos de obtenção de dados

* **obtemNomeAtleta()**
* **obtemIdadeAtleta()**
* **obtemPesoAtleta()**
* **obtemAlturaAtleta()**
* **obtemNotasAtleta()**
* **obtemCategoria()**
* **obtemIMC()**
* **obtemMediaValida()**

Esses métodos retornam as informações do atleta ou os resultados dos cálculos realizados.

---

## Regras Utilizadas

### Cálculo da categoria

| Idade         | Categoria     |
| ------------- | ------------- |
| 9 a 11 anos   | Infantil      |
| 12 a 13 anos  | Juvenil       |
| 14 a 15 anos  | Intermediário |
| 16 a 30 anos  | Adulto        |
| Demais idades | Sem categoria |

### Cálculo do IMC

```
IMC = peso / (altura × altura)
```

### Cálculo da média válida

1. As notas são ordenadas em ordem crescente.
2. A menor e a maior nota são removidas.
3. A média é calculada utilizando as três notas restantes.

---

## Exemplo de uso

```javascript
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);
```

---

## Exemplo de saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média Válida: 9.253333333333334
```

---

## Como executar o projeto

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/dados-atletas
```

2. Acesse a pasta do projeto:

```
cd dados-atletas
```

3. Execute o arquivo JavaScript utilizando Node.js:

```
node dados-atletas.js
```

---

## Tecnologias utilizadas

* JavaScript
* Node.js

---

## Autor

Camila Sixel Cordeiro
Estudante de Análise e Desenvolvimento de Sistemas

GitHub: https://github.com/csixel
