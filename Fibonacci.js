const {prompt } = require('vscode-websocket-alerts')
let numeroRecebido = prompt("Digite um número: "), n1 = 0, n2 = 1, n3 = 1

console.log(`Sequencia de Fibonacci até ${numeroRecebido} (ou o mais próximo):`)

do{
    console.log(n3)
    n1 = n2
    n2 = n3
    n3 = n1+n2
}while(n3 <= numeroRecebido)