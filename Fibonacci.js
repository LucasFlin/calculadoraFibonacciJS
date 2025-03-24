//Chamando o comando prompt para esse arquivo
const {prompt} = require('vscode-websocket-alerts')

//Criação de variaveis, com 'numeroRecebido' sendo o número que o usuário digitar e o restante são variaveis necessárias para fazer o calculo
let numeroRecebido = prompt("Digite um número: "), n1 = 0, n2 = 1, n3 = 1

//Diz para o usuário o que o programa mostrará a seguir
console.log(`Sequencia de Fibonacci até ${numeroRecebido} (ou o mais próximo):`)

//Loop responsável por fazer o calculo de Fibonacci (o próximo número é igual a soma dos 2 anteriores) até n3 ser maior ou igual ao número informado pelo usuário
do{
    console.log(n3)
    n1 = n2
    n2 = n3
    n3 = n1+n2
}while(n3 <= numeroRecebido)

// Compara o número digitado e o ultimo número da sequencia e mostra se o número digitado faz ou não parte da sequencia
if(n3 == numeroRecebido){
    console.log(`${numeroRecebido} faz parte da sequecia de Fibonacci!`)
}else{
    console.log(`${numeroRecebido} não faz parte da sequencia de Fibonacci.`)
}