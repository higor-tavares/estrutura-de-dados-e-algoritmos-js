const {Deque} = require('./deque-objeto');
const deque = new Deque();
deque.addFirst("Primeiro");
deque.addFirst("Antes do primeiro");
deque.addLast("Ultimo");
deque.addLast("Depois do ultimo");
while(!deque.isEmpty()){
    console.log(`desempilhando o deque: ${deque.removeLast()} faltam ${deque.size()}`);
}