function replacePair(numbers) {
  if (!numbers) return console.log(-1)

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] !== 0) {
      numbers[i] = 0
    }
  }
  
  return console.log(numbers)
}

let numbers = [5,4,7,2,9,4,3,6,5,1,4,7]
replacePair(numbers)
