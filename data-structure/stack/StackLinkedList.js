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
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  }

  isEmpty() {}
}

const myStack = new Stack();
myStack.push("google.com");
myStack.push("udemy.com");
myStack.peek();
console.log(myStack.pop());
myStack.peek();
