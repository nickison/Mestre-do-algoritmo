const prompt = require("prompt-sync")();

do{
    senha = prompt(" digite a senha ")
    if(senha.length >= 4){
        console.log("senha cadastrada com sucesso!")
    }
    if(senha.length < 4){
        console.log("senha muito curta, tente novamente")
    }
}
while(senha.length < 4 )