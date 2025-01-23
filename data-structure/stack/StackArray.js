class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(value) {
    this.data.push(value);
  }

  peek() {
    console.log(this.data[this.data.length - 1]);
  }

  pop() {
    return this.data.pop();
  }
}

const myStack = new Stack();
myStack.push("google.com");
myStack.push("udemy.com");
myStack.peek();
console.log(myStack.pop());
myStack.peek();
