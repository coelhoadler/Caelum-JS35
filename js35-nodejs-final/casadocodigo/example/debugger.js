const alunos = ['Fabio', 'Matheus', 'Vanessa']
const alunosTratamento = []

for(let i = 0; i < alunos.length; i++) {
  console.log(alunos[i])
}

alunos.forEach((aluno) => {
  alunosTratamento.push(`Mr. Ms. ${aluno}`)
})

alunos.map(aluno => `Mr. Ms. ${aluno}`)

alunos.map((aluno) => `Mr. Ms. ${aluno}`).forEach((aluno) => {
  debugger
  aluno
})
