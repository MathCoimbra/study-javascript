function validaArrays(arr, size) {
  try {
    if (!arr && !size) throw new ReferenceError('Envie os parâmetros!')

    if (typeof arr !== 'object')
      throw new TypeError('Envie um elemento do tipo Array!')

    if (typeof size !== 'number')
      throw new TypeError('Envie um elemento do tipo sizeber!')

    if (arr.length !== size) throw new RangeError('Tamanho do array inválido!')

    return arr
  } catch (e) {
    if (e instanceof RangeError){
      console.log(e.stack)
    } else if (e instanceof ReferenceError) {
      console.log(e.stack)
    } else {
      console.log('Outro tipo de erro!')
      console.log(e.stack)
    }
  }
}

console.log(validaArrays())
