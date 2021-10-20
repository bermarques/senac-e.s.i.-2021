let prompt = require("prompt-sync")();

// Exercício #1

let valorKg = Number(prompt("Valor do Kg: R$ "));
let clienteServiu = Number(prompt("Cliente serviu (gr): "));

let apagar = (clienteServiu / 1000) * valorKg;
console.log(`A Pagar R$: ${apagar.toFixed(2)}`);

// Exercício 2

let modelo = prompt("Modelo: ");
let valorAvaliacao = Number(prompt("Valor da avaliação: "));
let anoVeiculo = Number(prompt("Ano de fabricação: "));

let valorSeguro = ((4 / 100) * valorAvaliacao).toFixed(2);
let anoAtual = new Date().toISOString().split("-")[0];
let desconto = (anoAtual - anoVeiculo) * 50;
let aPagar = valorSeguro - desconto;

console.log("Veículo:" + modelo);
console.log("Avaliação: " + Number(valorAvaliacao).toFixed(2));
console.log("Ano de Fabricação: " + anoVeiculo);
console.log("");
console.log("Proposta de Seguro - " + modelo);
console.log("Valor do seguro R$: " + valorSeguro);
console.log("-------------------------");
console.log("Desconto R$: " + desconto);
console.log("Valor a pagar R$: " + aPagar);

// Exercicio 3

let numeroPacientes = Number(prompt("Número de pacientes: "));
let dentistaB = Math.round(numeroPacientes / 2);

console.log("Número de pacientes: " + numeroPacientes);

if (numeroPacientes <= 5) {
  console.log("Dentista A: " + numeroPacientes);
} else {
  console.log("Dentista A: " + (numeroPacientes - dentistaB));
  console.log("Dentista B: " + dentistaB);
}
console.log("--------------------");

// Exercício 4

let valorConta = Number(prompt("Valor da Conta R$: "));
let valorPago = Number(prompt("Valor Pago R$: "));
if (valorPago > valorConta) {
  console.log("Troco R$ " + (valorPago - valorConta).toFixed(2));
} else if (valorPago < valorConta) {
  console.log("Ops... Faltou R$ " + (valorConta - valorPago).toFixed(2));
} else {
  console.log("Obrigado, volte sempre!");
}

let numeroChinchilas = Number(prompt("Nº Inicial de Chinchilas: "));
let numeroMeses = Number(prompt("Nº meses: "));
let mesAtual = 1;
let chinchilasAtual = numeroChinchilas;

while (mesAtual <= numeroMeses) {
  console.log(mesAtual + "º mês: " + chinchilasAtual);
  mesAtual++;
  chinchilasAtual *= 2;
}
