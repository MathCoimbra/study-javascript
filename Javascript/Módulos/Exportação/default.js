/************ Default exports ******************/

/* Através da palavra default é definido que esse arquivo irá retornar por padrão uma função específica */

function showAge(person){
  return `The age's ${person.name} is ${person.age}`
}

function showCity(person){
  return `The age's ${person.name} is ${person.city}`
}

function showHobby(person){
  return `The age's ${person.name} is ${person.hobby}`
}

export{
  showAge,
  showCity
}

export default showHobby