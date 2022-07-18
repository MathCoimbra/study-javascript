/* Exemplo sem parâmetros */

const pessoa = {
  nome: 'Ju'
}

const animal =  {
  nome: 'Maguie'
}

function getSomething() {
  console.log(this.nome)
}

getSomething.call(pessoa) // irá retornar o nome que está referenciado ao objeto pessoa
getSomething.call(animal) // irá retornar o nome que está referenciado ao objeto animal


/* Exemplo com parâmetros */

const myObj = {
  num1: 10,
  num2: 4,
}

function soma(a,b){
  console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1,5) // resultado será 20