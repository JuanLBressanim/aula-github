var produto=prompt("Qual é seu produto");
var quantidade=parseInt(prompt("Quantos prdoutos foram vendidos"));
var valorProdutos=parseFloat(prompt("Qual o valor deste produto?"));
var valorTotal=quantidade-valorProdutos;
var desconto=parseFloat(prompt("Digite o valor de desconto"));
var descontoTotal=porcentagemDes /100;
var preço=valorProdutos* descontoTotal;
console.log("o preço do produto é:" *preço);