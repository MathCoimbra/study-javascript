function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 2, 3]

/*  o spread é sinalizado pela reticências na chamada da função, tornando x = 1, y = 2 e z = 3 */
console.log(sum(...numbers))
