"use strict";
// --- ATIVIDADE 01 ---
const numeros = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
const numerosImpares = numeros.filter((num) => num % 2 != 0);
console.log(numerosImpares);
// --- ATIVIDADE 02 ---
const somaValores = numeros.reduce((resultado, proximo) => resultado + proximo);
console.log(somaValores);
