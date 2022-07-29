/************ Named exports ******************/

/* 1° sintaxe */

  /* Explicitando a exportação da função através do "export" direto na função */

export function showAge(person){
  return `The age's ${person.name} is ${person.age}`
}

/* 2° sintaxe */

  /* Exportando a função posteriormente ao uso da mesma */

function showCity(person){
  return `The age's ${person.name} is ${person.city}`
}

function showHobby(person){
  return `The age's ${person.name} is ${person.hobby}`
}

export{
  showCity,
  showHobby
}