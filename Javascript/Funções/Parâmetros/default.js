/* Adicionando um valor padrão a um parâmetro, caso não o mesmo não seja preenchido */

/* Objetivo da função: calcular o exponencial de um array de números */

  /* Abaixo é adicionado o valor 1 no segundo parâmetro caso nada seja preenchido na chamada da função */
function exponencial(array, num=1){
  const result= []

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** num)
  }

  return result
}

exponencial([1,5,9,7,9]) // resultará no mesmo array, pois a função assumiu o valor padrão que é 1, sendo todo número elevado a 1 resultando em ele mesmo

exponencial([1,5,9,7,9], 2) // resultará em [1, 25, 81, 49, 81] valores elevados a 2, pois o parâmetro foi preenchido