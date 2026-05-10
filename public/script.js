let nome = prompt("Digite seu nome: ");
 

let renda;
do {
  renda = Number(prompt("Informe sua renda mensal (R$):"));
  if (isNaN(renda)) alert("Digite apenas números por favor.");
} while (isNaN(renda));

let qtd;
do {
  qtd = Number(prompt("Quantas despesas? (1 a 5)"));
  if (isNaN(qtd)) alert("Digite apenas números!");
} while (isNaN(qtd));
 
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;
qtd = Math.floor(qtd);
 

let total = 0;
for (let i = 1; i <= qtd; i++) {
  let despesa;
  do {
    despesa = Number(prompt(`Despesa ${i} (R$):`));
    if (isNaN(despesa)) alert("Digite apenas números!");
  } while (isNaN(despesa));
  total += despesa;
}
 

let sobra = renda - total;
let mensagem;
 
if (total > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else if (sobra / renda >= 0.30) {
  mensagem = "✅ Ótimo: boa margem de sobra.";
} else {
  mensagem = "🙂 Ok: dá para melhorar a sobra.";
}
 

let resultado =

  `Nome: ${nome}\n` +
  `Renda: R$ ${renda.toFixed(2)}\n` +
  `Despesas: R$ ${total.toFixed(2)}\n` +
  `Sobra: R$ ${sobra.toFixed(2)}\n` +
  `Situação: ${mensagem}`;
 
alert(resultado);
console.log(resultado);