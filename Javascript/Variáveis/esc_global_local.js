var a = 1
var b = 2

if (a == 1) {
  var a = 11 // escopo global e local
  let b = 22 // escopo limitado ao bloco, no caso, ao if

  console.log(a) // resultará no valor 11

  console.log(b) // resultará no valor 22 somente nesse bloco
}

console.log(a) // resultará em 11 que é o último valor informado, devido "var" ter escopo global o valor de antes da variável foi substuído pelo último declarado

console.log(b) // resultará em 2 da variável "var" pois a variável b declarada no bloco if é "let" que tem escopo limitado ao bloco e não global, por isso o valor declarado dentro do bloco não será 22
