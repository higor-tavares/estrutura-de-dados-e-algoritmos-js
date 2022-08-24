const { Stack } = require("./stack-objeto");

/** Conversor de Decimal para Binario */
function converter(decimalNumber){
    const resultStack = new Stack();
    let result = decimalNumber;
    let resultString = '';
    while(result > 0){
        resultStack.push(result%2);
        result = Math.floor(result/2);
    }
    while(!resultStack.isEmpty()){
        resultString += resultStack.pop();
    }
    return resultString;
}

console.log(converter(25));
console.log(converter(1000))