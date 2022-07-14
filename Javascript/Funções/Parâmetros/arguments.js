/* Exemplo utilizando o objeto "arguments" */

/* Objetivo da função: verificar qual o maior número dentro de um array */

  /* Infinity = variável para igualar a variável max a qualquer número seja, positivo ou negativo */
function findMax(){
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++){
    if (arguments[i] > max){
      max = arguments[i]
    }
  }

  return max
}

console.log(findMax(5, 125, 204, 65897, 87946, 5, 6 , 4 , 102458, 1545485185, 1221))