function getAlunos(alunos, mediaFinal) {
  let alunosAprovados = []

  for (let i = 0; i < alunos.length; i++) {
    const { nome, nota } = alunos[i]

    if (nota >= mediaFinal) {
      alunosAprovados.push(nome)
    }
  }

  return alunosAprovados
}

const alunos = [
  {
    nome: 'Matheus',
    nota: 6,
  },
  {
    nome: 'Thiago',
    nota: 9,
  }
]

console.log(getAlunos(alunos, 6))
