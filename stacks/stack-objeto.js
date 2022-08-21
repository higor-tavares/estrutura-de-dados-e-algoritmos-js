class Stack {
    constructor(){
        this.__length = 0;
        this.__items = {};
    }
    push(element){
        this.__items[this.__length] =  element;
        this.__length ++;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.__length --;
        const element =  this.__items[this.__length];
        delete this.__items[this.__length];
        return element;
    }
    peek(){
        return this.__items[ this.__length -1 ];
    }
    isEmpty(){
        return this.__length === 0;
    }
    size(){
        return this.__length;
    }
    clear(){
        this.__items = {};
        this.__length = 0;
    }
}
module.exports = {
    Stack
}