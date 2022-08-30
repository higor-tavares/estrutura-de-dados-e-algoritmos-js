class Deque{
    constructor() {
        this.__items = {};
        this.__length = 0;
        this.__last = 0;
        this.__first = 0;
    }
    addFirst(element){
        this.__first --;
        this.__items[this.__first] = element;
    }
    addLast(element){
        this.__last ++;
        this.__items[this.__last] = element;
    }
    size(){
        return this.__last - this.__first
    }
    isEmpty(){
        return this.__first == this.__last;
    }
    removeFirst(){
        if(this.__first === 0){
            this.__first ++;
            this.__last ++;
        }
        const element = this.__items[this.__first];
        delete this.__items[this.__first];
        this.__first ++;
        return element;
    }
    removeLast(){
        if(this.__last === 0){
            this.__last --;
            this.__first --;
        }
        const element = this.__items[this.__last];
        delete this.__items[this.__last];
        this.__last --;
        return element;
    }
}
module.exports = {
    Deque
}