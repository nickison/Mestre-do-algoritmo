const prompt = require("prompt-sync")();

let resultado = 0
let valor

console.log('sistema de caixa, digite 0 para sair')

while(valor !== 0 ){
    valor = parseInt(prompt(' registre o valor do produto '))
    if(valor < 0){
        console.log(" Registre um valor valido ")
        continue
    }

    resultado = resultado + valor
    console.log(resultado)
}
