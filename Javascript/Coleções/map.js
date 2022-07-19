/* Forma de declarar map */

const myMap = new Map()

/* na atribuição de valor deve ser informado a chave e o valor */
myMap.set('orange', 'fruit')

// é informado o nome da chave na consulta, no caso abaixo irá retornar o valor que é "fruit"
myMap.get('orange') 

// é informado o nome da chave também para deletar, no caso abaixo irá deletar o valor que é "fruit"
myMap.delete('orange') 