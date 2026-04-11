const prompt = require("prompt-sync")();

let nota = prompt("Qual a nota do aluno ?") 
if(nota >= 8.9){
    console.log(`Parabens você foi excelente ${nota}`)
}else if(nota >= 6.0){
    console.log(`Aprovado com nota ${nota}`)
}else{
    console.log(`Você foi reprovado ${nota}`)
}