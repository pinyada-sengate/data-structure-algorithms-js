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

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const temp = this.top;
      this.top = node;
      this.top.next = temp;
    }

    this.length++;
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
