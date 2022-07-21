function sum(array) {
  return nums.reduce(function (accumulator, currentValue) {
    /* console log enviando os parâmetros como objeto (entre chaves) para visualizar os valores atualizando */
    console.log({ accumulator })
    console.log({ currentValue })
    return accumulator + currentValue
  })
}

const nums = [2, 0, 1, 2, 1, 3]

console.log(sum(nums))

function balance(array, saldoInicial){
  return array.reduce(function(saldoInicial, saldoAtual){
    return saldoInicial - saldoAtual
  }, saldoInicial)

}

const precos = [90, 13, 21, 70, 18]

console.log(`Saldo final - ${balance(precos, 300)}`)