class Queue{
    constructor(){
        this.__length = 0;
        this.__lowest = 0;
        this.__items = {}
    }

    isEmpty(){
        return this.__length === this.__lowest;
    }

    size(){
        return this.__length - this.__lowest;
    }

    enqueue(element){
        this.__items[this.__length] = element;
        this.__length ++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const element = this.__items[this.__lowest];
        delete this.__items[this.__lowest];
        this.__lowest ++;
        return element;

    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.__items[this.__lowest];
    }
    clear(){
        this.__length = 0;
        this.__lowest = 0;
        this.__items = {}
    }
}
module.exports = {
    Queue
}