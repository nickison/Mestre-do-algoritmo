const prompt = require("prompt-sync")();
//prompt("qual a tabuada que voce quer consultar hoje ?") 
/*
let numero = 1

for(numero; numero <= 10; numero++){
        for(let i = 1; i <= 10; i++){
            console.log(` ${numero} x ${i} = ${numero * i}`)
        }
        console.log("------------------------")
}


//prompt("qual a tabuada ?")
for(multiplicando = 1; multiplicando <= 10;multiplicando++){
        for(multiplicado = 1; multiplicado <= 10; multiplicado++){
            let resultado = multiplicando * multiplicado
            console.log(`${multiplicando} x ${multiplicado} = ${multiplicando * multiplicado}`)
            console.log(resultado)
        }
        console.log("------------------")
}
*/
/*
for (par = 0; par <= 50; par += 2 ){
    console.log(par)
}
*/
let resultado = 1

for(i = 5;i >= 1; i--){
    resultado = resultado * i

    console.log(resultado)  
}

//ERREI O CODIGO PORQUE ESTAVA COLOCANDO A VARIAVEL RESULTADO DENTRO DO FOR, ELA DE ATUALIZAVA PARA O ULTIMO NUMERO DA ITERAÇÃO E NÃO PARA O RESULTADO
