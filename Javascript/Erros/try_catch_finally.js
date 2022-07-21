function verificaPalindromo(string) {
  if (!string) throw 'String inválida'

  return string === string.split('').reverse().join('')
}

function tryCatch(string) {
  /* adicionado ao try a chamada da função "verificaPalindromo" e se caso algum erro ocorra nessa chamada o catch irá pegar esse erro (e - erro mais genérico) e exibir em tela, a exibição pode ocorrer através do console ou também pelo "throw e"*/
  try {
    verificaPalindromo(string)
  } catch (e) {
    console.log(e)
  } finally {
    console.log(`A string enviada foi: ${string}`)
  }
}

tryCatch('')