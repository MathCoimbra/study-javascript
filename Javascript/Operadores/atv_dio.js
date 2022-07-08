function validaSoma(num1, num2) {
  if (!num1 || !num2) return 'Defina dois números ao chamar a função'

  var resultSum = num1 + num2

  const phrase = {
    equal: 'Os números ' + num1 + ' e ' + num2 + ' são iguais. ',
    noEqual: 'Os números ' + num1 + ' e ' + num2 + ' não são iguais. ',
    greater: 'Sua soma é ' + resultSum + ' que é maior que 10 e maior que 20',
    lass: 'Sua soma é ' + resultSum + ' que é menor que 10 e menor que 20',
    greaterOnlyTen:
      'Sua soma é ' + resultSum + ' que é maior que 10 e menor que 20',
    equalTen: 'Sua soma é ' + resultSum + ' que é menor que 20',
    equalTwenty: 'Sua soma é ' + resultSum + ' que é maior que 10'
  }

  if (num1 == num2 && resultSum > 10 && resultSum > 20) {
    console.log(phrase.equal + phrase.greater)
  } else if (num1 == num2 && resultSum > 10 && resultSum < 20) {
    console.log(phrase.equal + phrase.greaterOnlyTen)
  }

  if (num1 == num2 && resultSum < 10 && resultSum < 20) {
    console.log(phrase.equal + phrase.lass)
  }

  if (num1 != num2 && resultSum > 10 && resultSum > 20) {
    console.log(phrase.noEqual + phrase.greater)
  } else if (num1 != num2 && resultSum > 10 && resultSum < 20) {
    console.log(phrase.noEqual + phrase.greaterOnlyTen)
  }

  if (num1 != num2 && resultSum < 10 && resultSum < 20) {
    console.log(phrase.noEqual + phrase.lass)
  }
  
  if (num1 == 5 && num2 == 5) {
    console.log(phrase.equal + phrase.equalTen)
  } else if (num1 == 10 && num2 == 10) {
    console.log(phrase.equal + phrase.equalTwenty)
  }
}

console.log(validaSoma(5, 1))
