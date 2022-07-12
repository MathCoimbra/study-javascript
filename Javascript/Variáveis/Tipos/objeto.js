/* Exemplo de objeto*/
var vAluno = { 
  name: 'Fulano de Tal', 
  age: 18 
}
console.log(typeof vAluno)

  /* Outras formas de adicionar valor ao objeto */
    /* nomeDaChave.nomeDoValor = "valor" */
  vAluno.address = "Av. Fulano"
  console.log(vAluno.address)

    /* nomeDaChave["nomeDoValor"] = "valor" */
  vAluno["comercialAddress"] = "Rua de tal"
  console.log(vAluno.comercialAddress)
  
  /* nomeDaChave[nomeDeUmaVariavel] = "novo valor" */
  let momName = "nameOfMom"
  vAluno[momName] = "Fulana"
  console.log(vAluno)

  /* Acessando os métodos de um objeto, utilizado a classe Object */
  Object.values(vAluno)
  Object.keys(vAluno)