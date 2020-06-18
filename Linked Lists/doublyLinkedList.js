class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
    return this.printList()
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this.printList()
    //console.log(newNode)
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    let leader = this.traverseToIndex(index - 1)
    let follower = leader.next
    newNode.next = follower
    newNode.prev = leader
    leader.next = newNode
    follower.prev = newNode
    this.length++
    return this.printList()
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    let toBeDeletedNode = leader.next
    const follower = toBeDeletedNode.next
    leader.next = follower
    follower.prev = leader
    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++;
    }
    return currentNode
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.prepend(3)
myLinkedList.insert(1, 8)
myLinkedList.insert(4, 18)
myLinkedList.remove(2)
console.log(myLinkedList.printList())