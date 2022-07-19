/* Exemplo da sintaxe sem parâmetros e com uma linha de retorno*/

const helloWorld = () => 'Hello World'

/* A função acima é o mesmo que estas: */

const helloWorld2 = () => {
  return 'Hello World'
}

const helloWorld3 = function () {
  return 'Hello World'
}

/* Exemplo da sintaxe com parâmetros e com uma linha de retorno*/

const soma = (a, b) => a + b

soma(14,6) // retornará 20

const sub = a => a 

sub(1) // retornará 1
