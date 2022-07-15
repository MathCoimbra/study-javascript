/* Objetivo da função - pegar as propriedades/chaves do objeto */

function getProp(obj){
  for(prop in obj){
    console.log(prop)
  }
}

const myObj = {
  nome: 'Matheus',
  idade: '20',
  estado: 'SP'
}

getProp(myObj)

/* Objetivo da função - pegar os valores de cada propriedade do objeto */

function getPropValue(obj){
  for(prop in obj){
    console.log(obj[prop])
  }
}

const myObj2 = {
  nome: 'Matheus',
  idade: '20',
  estado: 'SP'
}

getProp(myObj2)
