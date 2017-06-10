var alunos = ["Adler", "Alexandre", "Adriane"];

if (alunos[1].length > 5) {
  console.log(alunos[1]);
  // let aluno = alunos[0];
  var aluno = alunos[0];
}

console.log(aluno);

// for (let i = 0; i < alunos.length; i++) {
for (var i = 0; i < alunos.length; i++) {
  alunos[i];
}

console.log(`valor de i: ${i}`);
