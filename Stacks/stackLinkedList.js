class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top
      this.top = newNode;
      this.top.next = holdingPointer
    }
    this.length++
    return this.top
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--
    return holdingPointer
  }
  isEmpty() {
    if (this.bottom === null) return true;
    return false;
  }
}

const myStack = new Stack();
myStack.push('Discord')
myStack.push('Yahoo')
myStack.push('Google')
//console.log(myStack.peek())

console.log(myStack)