class Stack{
    constructor(){
        this.__items = [];
        console.log('criando minha pilha...')
    }
    push(element){
        this.__items.push(element);
    }
    pop(){
        return this.__items.pop();
    }
    peek(){
        return this.__items[ this.__items.length -1 ];
    }
    isEmpty(){
        return this.__items.length === 0;
    }
    size(){
        return this.__items.length;
    }
    clear(){
        this.__items = [];
    }
}
module.exports =  {
    Stack
}
