/********** VARIÁVEIS TIPO VAR ************/

numberOne = 1
console.log(numberOne + 1)
var numberOne
var numberOne = 2

// ao rodar esse código o javascript irá primeiro realizar a declaração da variável, mesmo ela tendo sido declarada posteriormente a sua atribuição de valor, devido "var" ser de escopo global

numberTwo = 2
console.log(numberTwo + 2)

// e mesmo se a variável não for declarada o javascript interpretará que isso é uma variável (tipo var)

/********** VARIÁVEIS TIPO LET (letting = de locação) ************/

let numberThree
numberThree = 3
console.log(numberThree + 3)

// para as variáveis do tipo let deve-se ter a declaração primeiro, devido "let" ser de escopo local, caso seja declarada posteriormente o código não irá rodar
