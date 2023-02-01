// --- ATIVIDADE 03 ---
class Pessoa {
  nome: string;
  idade: number;
  salario: number;

  constructor(nome: string, idade: number, salario: number) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }
}

const listaPessoas = [
  new Pessoa("Anderson", 24, 1013),
  new Pessoa("Eduarda", 26, 1200),
  new Pessoa("Maria", 32, 4200),
  new Pessoa("João", 48, 6000),
  new Pessoa("Bob Sponja JR", 12, 457),
  new Pessoa("Josevaldo JR", 17, 998),
];

const listaMenor23 = listaPessoas.filter((pessoa) => {
  return pessoa.idade < 23;
});

console.log(listaMenor23);

// --- ATIVIDADE 04 ---
const listaMenor30 = listaPessoas.filter((pessoa) => {
  return pessoa.idade < 30;
});

const mediaMenor30 =
  listaMenor30.reduce((result, prox) => result + prox.idade, 0) /
  listaMenor30.length;

console.log(mediaMenor30);

// --- ATIVIDADE 05 ---
const listaSalarioMenor1023 = listaPessoas.filter(
  (pessoa) => pessoa.salario < 1023
);

const listaFiltrada = listaSalarioMenor1023.map((pessoa) => {
  return {
    nome: pessoa.nome,
    idade: pessoa.idade,
  };
});

console.log(listaFiltrada);
