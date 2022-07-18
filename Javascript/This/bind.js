const retornaNomes = function (){
  return this.nome
}

let math = retornaNomes.bind({nome: 'Math'})

console.log(math())