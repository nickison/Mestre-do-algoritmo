const prompt = require("prompt-sync")();

let numero = prompt("Escolha um numero ");

    if(numero % 2 == 0 ){
        console.log(`o numero ${numero} é par`)
    }else{
        console.log(`o numero ${numero} é impar`)
    }

