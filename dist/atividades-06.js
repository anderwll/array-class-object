"use strict";
// --- ATIVIDADE 06 ---
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nota = -1;
        this.status = "";
    }
}
const listaAlunos = [
    new Aluno("Anderson", 16),
    new Aluno("Maria", 18),
    new Aluno("Pedro", 15),
    new Aluno("Joana", 17),
    new Aluno("Lucio", 18),
    new Aluno("Eduarda", 16),
    new Aluno("Mathias", 17),
];
const gabarito = ["A", "C", "B", "A", "A", "B", "C", "A", "B", "C"];
const opcoes = ["A", "B", "C"];
listaAlunos.forEach((element) => {
    let respostas = [];
    gabarito.forEach((index) => {
        const sorteio = Math.floor(Math.random() * opcoes.length + 1);
        respostas.push(opcoes[sorteio]);
    });
    let acertos = 0;
    for (let index = 0; index < respostas.length; index++) {
        if (respostas[index] == gabarito[index]) {
            acertos++;
        }
    }
    element.nota = acertos;
    if (acertos >= 6) {
        element.status = "Aprovado";
    }
    else {
        element.status = "Reprovado";
    }
});
const aprovados = listaAlunos.filter((aluno) => aluno.status.toUpperCase() === "APROVADO");
const reprovados = listaAlunos.filter((aluno) => aluno.status.toUpperCase() === "REPROVADO");
const mediaTurma = listaAlunos.reduce((result, prox) => result + prox.nota / listaAlunos.length, 0);
const melhorAluno = listaAlunos.sort((a, b) => {
    if (a.nota > b.nota) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log(""); // ESSES LOG VAZIOS SERVEM PARA DAR MAIS ESPAÇO NO TERMINAL :)
console.log(`=== ALUNOS APROVADOS ===`);
aprovados.map((aluno) => {
    return console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota}`);
});
console.log("");
console.log(`=== ALUNOS REPROVADOS ===`);
reprovados.map((aluno) => {
    return console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota}`);
});
console.log("");
console.log(`=== MÉDIA DA TURMA ===`);
console.log(`Média: ${mediaTurma.toFixed(1)}`);
console.log("");
console.log(`=== MELHOR ALUNO ===`);
console.log(`Nome: ${melhorAluno[0].nome} - Nota: ${melhorAluno[0].nota}`);
console.log("");
console.log(`=== PIOR ALUNO ===`);
console.log(`Nome: ${melhorAluno[listaAlunos.length - 1].nome} - Nota: ${melhorAluno[listaAlunos.length - 1].nota}`);
console.log("");
