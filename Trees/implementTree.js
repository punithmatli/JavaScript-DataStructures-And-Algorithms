class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let traverseNode = this.root
      while (traverseNode) {
        if (traverseNode.value > value) {
          if (!traverseNode.left) {
            traverseNode.left = newNode
            return this
          }
          traverseNode = traverseNode.left
          continue;
        }
        else {
          if (!traverseNode.right) {
            traverseNode.right = newNode
            return this
          }
          traverseNode = traverseNode.right
          continue;
        }
      }
    }
    //Code here
  }
  lookup(value) {
    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.value === value) {
        return currentNode;
      }
      else if(value > currentNode.value) {
        currentNode = currentNode.right;
      }
      else {
        currentNode = currentNode.left;
      }
    }
    return false;
    //Code here
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(170)
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(9))
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}