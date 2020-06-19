class QueueUsingStacks {
  constructor() {
    this.first = []
    this.second = []
    this.length = 0
  }

  peek() {
    return this.first[0]
  }
  
  enqueue(value) {
    this.first.push(value)
    this.length++
    return this.first
  }

  dequeue() {
    if(this.first.length === 0) return null
    while(this.first.length > 0) {
      this.second.push(this.first.pop())
    }
    this.second.pop()
    while(this.second.length > 0) {
      this.first.push(this.second.pop())
    }
    this.length--
    return this.first
  }
}

const myQueue = new QueueUsingStacks()
myQueue.enqueue('John')
myQueue.enqueue('Joe')
myQueue.enqueue('Max')
myQueue.enqueue('Matt')
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.peek()
console.log(myQueue)