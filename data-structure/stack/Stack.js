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

  // add a item
  push(value) {
    const node = new Node(value);

    if (this.top) {
      this.top.next = node;
    }
    this.top = node;
  }

  // view the top most item
  peek() {
    console.log(this.top.value);
  }

  // remove the last item
  pop() {}

  isEmpty() {}
}

const myStack = new Stack();
myStack.push("google.com");
myStack.push("udemy.com");
myStack.peek();
