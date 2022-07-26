class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valorASacar) {
    if(valorASacar > this._saldo) {
      return 'Operação negada por falta de saldo'
    }

    this._saldo -= valorASacar
    
    return this._saldo
  }

  depositar(valorADepositar) {
    this._saldo += valorADepositar

    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero) 
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupança'
  }
}

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitária'
  }

  sacar(valorASacar) {
    if (valorASacar > 500){
      return 'Operação negada, valor acima de 500'
    }

    saldo -= this._valorASacar
  }
}

let math = new ContaCorrente(001, 1835, true)

console.log(math.saldo)
console.log(math.depositar(1000))
console.log(math.saldo)
console.log(math.sacar(600))
console.log(math.saldo)
console.log(math.sacar(600))

let math2 = new ContaUniversitaria(001, 1835, true)

console.log(math2.saldo)
console.log(math2.depositar(1000))
console.log(math2.saldo)
console.log(math2.sacar(600))