const questions = [
  "O que você aprendeu hoje?",
  "O que te deixou bolado? E o que pode melhorar?",
  "O que te deixou feliz?",
  "Quantas pessoas você ajudou?"
]

const ask = (index = 0) => {
  /* método do process para exibir algo na tela */
  process.stdout.write('\n' + questions[index] + " > ")
}

ask()

const answers = []
/* stdin - método que espera uma entrada de dados */
/* on - método que fica escutando algo para a partir disso executar alguma coisa, no caso abaixo, aguarda a entrada de dados */
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length){
    ask(answers.length)
  } else {0
    /* método que encerra um processo */
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Bacana!
  
  O que você aprendeu foi:
  ${answers[0]}

  O que te deixou bolado e o que pode te melhorar foi:
  ${answers[1]}

  O que te deixou feliz foi:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoas hoje!

  Até logo!
  `)
})