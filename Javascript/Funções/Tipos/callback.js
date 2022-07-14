/* Exemplo de uma função callback */

const calc = function(operacao, num1, num2){
  return operacao(num1, num2)
}

const soma = function(num1, num2){
  return num1 + num2;
}

const sub = function(num1, num2){
  return num1 - num2;
}

  /* Conforme abaixo a função "calc" serve como callback, pois recebe como parâmetro uma outra função chamada "soma" ou "sub" */

const resultSoma = calc(soma, 1, 2) // resultará em 3
const resultSub = calc(sub, 2, 8) // resultará em -6