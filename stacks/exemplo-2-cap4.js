const data = require('./stack-objeto');

const pilha = new data.Stack();
pilha.push('C')
pilha.push('R')
pilha.push('U')
pilha.push('D')

while(!pilha.isEmpty()){
    console.log(pilha.pop())
}