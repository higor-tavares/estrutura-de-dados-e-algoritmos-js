const {Queue} = require('./queue-objeto')
const filaDoPao = new Queue();
filaDoPao.enqueue("Marcos");
filaDoPao.enqueue("Jose");
filaDoPao.enqueue("Dona maria");
filaDoPao.enqueue("Seu araújo");
console.log("O PÃO FICOU PRONTO!!!");
while(!filaDoPao.isEmpty()){
    console.log(`Atendendo o client ${filaDoPao.dequeue()} ainda faltam ${filaDoPao.size()}`);
}