const array = []

/* Sintaxe do método */
array.filter(callback(item, index, array), thisArg)

/* Exemplo com filter */

const frutas = ['maçã do amor', 'maçã', 'maçã verde', 'uva', 'laranja']

/* includes - método de string para filtrar */
frutas.filter((fruta) => fruta.includes('maçã')) // retorno [ 'maçã do amor', 'maçã', 'maçã verde' ]