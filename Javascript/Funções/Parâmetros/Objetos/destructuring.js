const user = {
  id: 17,
  displayName: 'mathcoimbra',
  fullName: {
    firstName: 'Matheus',
    lastName: 'Coimbra'
  }
}

/* Para utilização do destructuring é utilizada as chaves para filtrar os dados do objeto, no caso abaixo está sendo utilizado somente o id */

function userId({id}){
  return id
}

/* Já na função abaixo é utilizado o fullName e também nomeado os dados do objeto através do sinal de dois pontos */

function getFullName({fullName: {firstName: first, lastName: last}}){
  return `${first} ${last}`
}

userId(user) // retornará 17

getFullName(user) // retornará "Matheus Coimbra"