/*  o rest é sinalizado pela reticências na assinatura da função, tornando abaixo por exemplo o último valor um array com valores [1,2]*/
function confereTamanho (...args){
  console.log(args.length)
}

confereTamanho() // retorna 0
confereTamanho(1,) // retorna 1
confereTamanho(1,2) // retorna 2