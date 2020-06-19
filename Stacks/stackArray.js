class Stack {
  constructor(){
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value){
    this.array.push(value)
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
  isEmpty() {
    return this.array.length === 0
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('yahoo');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.isEmpty();
console.log(myStack)

