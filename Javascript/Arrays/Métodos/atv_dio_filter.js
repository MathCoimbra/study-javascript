function getPares(array){
  return nums.filter((item) => item % 2 === 0)
}

const nums = [11, 48, 22, 14, 44, 21, 07]

console.log(getPares(nums))