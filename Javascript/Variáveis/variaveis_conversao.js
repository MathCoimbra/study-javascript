/*Exemplo de conversão explícita*/
var vTeste = "10";
console.log(typeof vTeste); //retorna string
/*parseInt() converte um string, retornando um number*/
vTeste = parseInt(vTeste);
console.log(typeof vTeste); // retorna number

/*Exemplo de conversão implícita*/
var vTeste2 = "10";
console.log(typeof vTeste2); //retorna string
vTeste2 = vTeste2 * 2;
console.log(typeof vTeste2); // retorna number

/* Exemplo método toString() */
let validation = 3 === 4
console.log(validation) // retorna boolean
validationText = validation.toString()
console.log(validationText) // retorna string