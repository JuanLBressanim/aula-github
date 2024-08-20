var valor=parseFloat(prompt("Digite o valor a converter"));
var porcentagem=parseInt(prompt("Digite a porcentagem que deseja encontrar"));
//converter o número inteiro para decimal 
//só é possível achar a % usando núemro decimal
var porcentagemDecimal=porcentagem /100;
//multiplica o valor para porcentagem para encontrar o resultado
var resultado=valor* porcentagemDecimal;
console.log("O resultado é:");