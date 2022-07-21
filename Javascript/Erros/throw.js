function verificaPalindromo(string){
  if (!string) throw 'String inválida'

  return string === string.split('').reverse().join('')
}

console.log(verificaPalindromo(''))

