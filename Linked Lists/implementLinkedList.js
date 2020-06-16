class LinkedList {
	constructor (value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head
		this.length = 1
	}
  
	append (value) {
		this.tail.next = {
			value: value,
			next: null
		}
		this.tail = this.tail.next
		this.length++
		return this.printList()
	}

	prepend (value) {
		const newNode = {
			value: value,
			next: null
		}
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this.printList()
		//console.log(newNode)
	}

	insert(index, value) {
    if(index === 0) {
      this.prepend(value)
      return this.printList()
    }
		const newNode = {
			value: value,
			next: null
		}
    let leader = this.traverseToIndex(index-1)
		newNode.next = leader.next
		leader.next = newNode
    this.length++
		return this.printList()
	}

  remove(index) {
    const leader = this.traverseToIndex(index-1)
    let toBeDeletedNode = leader.next
    leader.next = toBeDeletedNode.next
    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++;
    }
    return currentNode
  }

  printList () {
    const array = []
    let currentNode = this.head
    while(currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.prepend(3)
myLinkedList.insert(0,8)
myLinkedList.insert(4,18)
myLinkedList.remove(2)
console.log(myLinkedList.printList())