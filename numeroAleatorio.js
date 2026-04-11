const prompt = require("prompt-sync")();
// teste
function gerarNumeroAleatorio() {
    let chute = prompt("advinhe qual o numero ")
    let numeroAleatorio = Math.floor(Math.random() * 10 + 1)
    const somAcerto = new Audio("./Resposta-Correta-1.mp3")

    if (chute === numeroAleatorio) {
        console.log(`parabens voce acertou `)

    } else {
        console.log(`voce errou o numero, o numero era ${numeroAleatorio}`)
    }
}

gerarNumeroAleatorio()