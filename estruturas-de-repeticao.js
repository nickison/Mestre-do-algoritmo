const prompt = require("prompt-sync")();
//prompt("qual a tabuada que voce quer consultar hoje ?") 
 
let numero = 1

for(numero; numero <= 10; numero++){
        for(let i = 1; i <= 10; i++){
            console.log(` ${numero} x ${i} = ${numero * i}`)
        }
        console.log("------------------------")
}