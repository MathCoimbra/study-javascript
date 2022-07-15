function multiplicaPorDois(arr){
  let multiplicados = []

  /* Sintaxe: índice incial; índice final; o que deve ser feito */
  for(let i = 0; i <arr.length; i++){
    multiplicados.push(arr[i] * 2)
  }

  return multiplicados

}

const numeros = [2,9,7,6,4,5,3]

multiplicaPorDois(numeros)