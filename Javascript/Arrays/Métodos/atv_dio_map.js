const apple = {
  value: 9.99
}

const orange = {
  value: 5.99
}

function mapWithThis(array, thisArg) {
  return array.map(function (item) {
   return item * this.value
  }, thisArg)
}

const array = [1, 2]

console.log('Map com this')

console.log(`apple - ${mapWithThis(array, apple)}`)
console.log(`orange - ${mapWithThis(array , orange)} \n`)

console.log('Map sem this')

function mapWithoutThis(array) {
  return array.map((item) => item * 2
)
}

const nums = [11,40,21,7,20,22]

console.log(mapWithoutThis(nums))