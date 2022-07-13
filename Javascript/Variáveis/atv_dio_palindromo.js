function isPalindromo(word){

  if (!word) return console.log('Insira uma palavra na chamada da função')

  let reverseWord = word.split('').reverse().join('')

  if (reverseWord === word){
    return console.log(`A palavra ${word} é um palíndromo`)
  } else {
    return console.log(`A palavra ${word} não é um palíndromo`)
  }

}

isPalindromo('ovo')