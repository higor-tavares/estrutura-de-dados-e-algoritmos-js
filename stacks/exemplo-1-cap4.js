const stacks = require('./stack-array');

const stack = new stacks.Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(18);
stack.push(42);

while(!stack.isEmpty()){
    console.log(stack.pop());
}