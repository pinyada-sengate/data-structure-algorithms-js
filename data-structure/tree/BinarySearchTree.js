//Level 0: 2^0 = 1
//Level 1: 2^1 = 2
//Level 2: 2^2 = 4
//Level 3: 2^3 = 8

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

  insert(value) {}

  lookup(value) {}
}

const tree = new BinarySearchTree();

//      9
//  4       20
//1   6   15    170
